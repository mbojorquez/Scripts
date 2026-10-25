import xarray as xr
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.dates as mdates

# === CONFIGURACIÓN ===
ruta_omeg = (
    '/home/mb/Versoes/WorkEtaVIII/out/Lima/netcdf/'
    '2021052300/sst_true_48h/'
    'Eta02_sst_true_48h_OMEG_2021052300.nc'
)

ruta_umes = (
    '/home/mb/Versoes/WorkEtaVIII/out/Lima/netcdf/'
    '2021052300/sst_true_48h/'
    'Eta02_sst_true_48h_UMES_2021052300.nc'
)

lon_min, lon_max = -79, -77
lat_min, lat_max = -14, -12


# === CARGAR LOS DOS ARCHIVOS ===
ds_omeg = xr.open_dataset(ruta_omeg)
ds_umes = xr.open_dataset(ruta_umes)

# Ajustar longitudes si están en 0–360°
for ds in (ds_omeg, ds_umes):
    if float(ds.lon.max()) > 180:
        ds.coords['lon'] = ((ds.lon + 180) % 360) - 180

# Recortar el dominio
ds_omeg = ds_omeg.sortby('lon').sortby('lat')
ds_umes = ds_umes.sortby('lon').sortby('lat')

dom_omeg = ds_omeg.sel(
    lon=slice(lon_min, lon_max),
    lat=slice(lat_min, lat_max)
)

dom_umes = ds_umes.sel(
    lon=slice(lon_min, lon_max),
    lat=slice(lat_min, lat_max)
)

# === EXTRAER VARIABLES ===
omeg = dom_omeg['omeg']
q = dom_umes['umes']  # Humedad específica (kg/kg)

# === ALINEAR COORDENADAS TEMPORALES Y VERTICALES ===
omeg, q = xr.align(omeg, q, join='inner')

# === OMEGA NEGATIVA ===
omeg_masked = omeg.where(omeg < 0)

# === HUMEDAD ESPECÍFICA A RELACIÓN DE MEZCLA ===
# q: kg de vapor / kg de aire húmedo
# r: kg de vapor / kg de aire seco
q = q.where((q >= 0) & (q < 1))
r = (q / (1 - q)) * 1000  # g/kg
# Enmascarar niveles inferiores a 850 hPa
r = r.where(r.lev <= 800)

# === PROMEDIO ESPACIAL PONDERADO POR LATITUD ===
weights_omeg = np.cos(np.deg2rad(omeg_masked.lat))
weights_r = np.cos(np.deg2rad(r.lat))

omeg_mean = (
    omeg_masked.weighted(weights_omeg)
    .mean(dim=('lat', 'lon'))
)

r_mean = (
    r.weighted(weights_r)
    .mean(dim=('lat', 'lon'))
)

# === PREPARAR DATOS PARA LOS GRÁFICOS ===
time = omeg_mean['time'].values
level = omeg_mean['lev'].values

omega_plot = omeg_mean.transpose('lev', 'time')
r_plot = r_mean.transpose('lev', 'time')

# === DOS SUBPLOTS ===
fig, axes = plt.subplots(
    2, 1,
    figsize=(13, 9),
    sharex=True,
    sharey=True
)

# Panel 1: omega negativa
c1 = axes[0].pcolormesh(
    time, level, omega_plot,
    shading='auto',
    cmap='RdBu'
)

fig.colorbar(c1, ax=axes[0], label='Omega (Pa/s)')
axes[0].set_title('Omega ascendente (rojo oscuro)y descendente (azul)')
axes[0].set_ylabel('Nivel de presión (hPa)')
axes[0].invert_yaxis()
axes[0].grid(True, alpha=0.3)

# Panel 2: relación de mezcla
c2 = axes[1].pcolormesh(
    r_mean['time'].values,
    r_mean['lev'].values,
    r_plot,
    shading='auto',
    cmap='turbo',
    vmin=2
)

fig.colorbar(c2, ax=axes[1], label='Relación de mezcla (g/kg)')
axes[1].set_title('Relación de mezcla')
axes[1].set_xlabel('Tiempo')
axes[1].set_ylabel('Nivel de presión (hPa)')
axes[1].grid(True, alpha=0.3)

# Formato del tiempo
axes[1].xaxis.set_major_formatter(
    mdates.DateFormatter('%d/%m %H:%M')
)
plt.setp(axes[1].get_xticklabels(), rotation=45, ha='right')

fig.suptitle(
    'Evolución temporal vertical: omega y relación de mezcla',
    fontsize=13
)

plt.tight_layout()
plt.show()

# === CERRAR ARCHIVOS ===
ds_omeg.close()
ds_umes.close()