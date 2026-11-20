// Estructura de Plantillas (Orden 1 - 2 - 3)
const F17_SUBFOLDERS = [
  { id: "f17_01", name: "1. Caminos", desc: "FOTOS CAMINOS, CALLES DESDE CUSTODIO HACIA SITE, INCLUYE CAMINATA HACIA CERRO" },
  { id: "f17_02", name: "2. Edificio & Cercos", desc: "FOTOS PANORAMICAS DEL EDIFICIO O SITE POR LOS 4 LADOS" },
  { id: "f17_03", name: "3. Medidor & Tableros & Contadores", desc: "FOTOS PANORAMICAS DE LOS TABLEROS, SUMINISTROS Y CONTADORES" },
  { id: "f17_04", name: "4. Accesos & Puertas", desc: "FOTOS DE ACCESO A EDIFICIO, PUERTAS, ESCALERAS INCLUYE LLAVES O CANDADOS" },
  { id: "f17_05", name: "5. Base de torre & Linea de Vida", desc: "FOTOS DE PEDESTAL DE TORRE Y BASE DE VIENTOS O ARRIOSTRES POR LOS 4 LADOS" },
  { id: "f17_06", name: "6. Equipos en piso & Losas", desc: "FOTOS PANORAMICOS DE GABINETES INCLUYE PLATAFORMA, MODULOS, GPS EN PISO" },
  { id: "f17_07", name: "7. Sistema de puesta a tierra", desc: "FOTOS DE BARRAS EN PISO Y TORRE. CABLE DE BAJADA DE ATERRAMIENTO. PARARAYO Y CABLE DE BAJADA. POZOS TIERRA LIMPIEZA Y MEDICIONES" },
  { id: "f17_08", name: "8. Portacables & Escalerillas rack", desc: "FOTOS DE ESCALERILLA EN PISO Y TORRE" },
  { id: "f17_09", name: "9. Sistema de balizamiento", desc: "FOTOS DE FANALES, FOTOCELDA, CABLE VULCANIZADO, LIMPIEZA DE FANALES Y PRUEBA DE FUNCIONAMIENTO" },
  { id: "f17_10", name: "10. Equipos en torre", desc: "FOTOS PANORAMICO DE EQUIPOS, ETIQUETA, CABLES, INICIO Y FIN DE SOPORTES, MEDICION DE TUBO, ALTURA DE EQUIPO" },
  { id: "f17_11", name: "11. Vista encima de torre", desc: "FOTOS DE TORRES HACIA ABAJO POR LOS 4 LADOS" },
  { id: "f17_12", name: "12. Vista panoramica de torre", desc: "FOTOS PANORAMICO DE TORRE INCLUYE ZOOM DE AREA DE ROLDANA POR LOS 4 LADOS" },
  { id: "f17_13", name: "13. Vista de site general", desc: "FOTOS GENERALES, PISOS, PAREDES, EQUIPOS, LETRERO, LUMINARIAS, TOMACORRIENTES, TECHOS, SOPORTES" },
  { id: "f17_14", name: "14. Transformadores & Postes", desc: "FOTOS DE POSTES DE COMETIDA, FOTOS DE POSTE DE TRANSFORMADOR INCLUYE ZOOM A TRANSFORMADOR" },
  { id: "f17_15", name: "15. Vistas de 30° encima de torre cada foto 5MB", desc: "FOTOS EN HORIZONTAL 12 FOTOS CADA 30 GRADOS, FOTOS BARRIDO 0 A 180 Y 180 A 360 (3 RONDAS) — ALTA RESOLUCIÓN SIN COMPRIMIR", highRes: true },
  { id: "f17_16", name: "16. Generadores", desc: "FOTOS DE GENERADORES, TANQUE COMBUSTIBLE, FOTOS DE AREA DE GENERADOR" },
  { id: "f17_17", name: "17. Estado de torre", desc: "FOTOS DE ANGULOS, PERNERIA Y PRUEBA DE TORQUE, ESTADO DE PINTURA. VERIFICAR CORROSION Y FALTANTES" },
  { id: "f17_18", name: "18. Vista panoramica de la estación por dentro y fuera", desc: "FOTOS PANORAMICAS DE PAREDES POR DENTRO Y FUERA POR 4 LADOS" },
  { id: "f17_19", name: "19. Vista de ingreso de Fibra Optica, identificar Operador, abrir cajas de pase", desc: "FOTOS ETIQUETAR OPERADOR FIBRA OPTICA, FOTOS DE RECORRIDO, CAMARAS" },
  { id: "f17_20", name: "20. Diagrama Unifilar desde Medidor hasta tableros", desc: "DIBUJAR DIAGRAMA DE RECORRIDO DE SUMINISTRO ATP HACIA TABLERO ATP" },
  { id: "f17_21", name: "21. Diagrama Unifilar de Tableros", desc: "DIBUJAR DIAGRAMA DE RECORRIDO DE SUMINISTRO OPERADOR HACIA TABLERO OPERADOR" },
  { id: "f17_22", name: "22. Diagrama de traslado desde Provincia al site", desc: "ESCRIBIR EL RECORRIDO DE LA RUTA DESDE EL CUSTODIO HACIA EL SITE, ZONAS PUNTUALES Y TIEMPO" },
  { id: "f17_23", name: "23. Vista de concertina", desc: "FOTOS VERIFICAR CORROSION Y CORTADO DE CONCERTINA. INCLUYE REPARAR CONCERTINA. FOTO ANTES Y DESPUES" },
  { id: "f17_24", name: "24. Vista de buzones abiertos y cerrados", desc: "FOTOS DE BUZONES ABIERTO Y CERRADO, FIBRA OPTICA, LLAVE Y CANDADO, LIMPIEZA DE BUZONES" },
  { id: "f17_25", name: "25. Etiquetado de llaves y video de validacion", desc: "FOTOS DE LLAVES SUELTAS DEL MANOJO Y ETIQUETADO EN PISO. VIDEO FUNCIONAMIENTO DE LA LLAVE EN LA PUERTA PRINCIPAL DEL SITE" },
  { id: "f17_26", name: "26. Estado de polimero, pvc, persiana, radomo, etc", desc: "FOTOS PANORAMICA DE POLIMERO O PVC, PERNERIA, EMPALMES, PINTURA" },
  { id: "f17_27", name: "27. Vista de luminarias en poste, site, arqueta", desc: "FOTOS DE LUMINARIAS APAGADAS Y PRENDIDAS EN SALA EQUIPOS Y POSTE SI APLICA" },
  { id: "f17_28", name: "28. Fotos de gestion ambiental", desc: "FOTOS DE CHARLA Y PERSONAL CON EPPS, SEÑALIZACION, Y GESTION DE RESIDUOS, USO DE EPPS DE TECNICO" },
  { id: "f17_29", name: "29. Fotos de cambio de batería", desc: "FOTOS Y VIDEOS DE PROCESO DE CAMBIO DE BATERIA, MEDICION DE BATERIA. VIDEO FUNCIONAMIENTO DE CANDADO NUEVO" }
];

const FORMATOS_SUBFOLDERS = [
  { id: "fmt_general", name: "Formatos y Documentos MP", desc: "Sube aquí fotos de formatos físicos o archivos PDF escaneados (Checklist, Protocolos, Actas)." }
];

const MP_SUBFOLDERS = [
  { id: "mp_01", name: "1. Personal con EPPs & Equipos utilizados", desc: "FOTO DE PERSONAL CON EPPS Y CHARLA DE 5 MINUTOS, EQUIPOS UTILIZADOS, TELUROMETO PINZA, DESARMADORES, BRUJULA, ETC" },
  { id: "mp_02", name: "2. Altura de torre", desc: "FOTO DE ARRIBA HACIA ABAJO, DE ABAJO HACIA ARRIBA. INCLUYE ALTURA TORRE BASE, ROLDANA SUPERIOR E INFERIOR" },
  { id: "mp_03", name: "3. Medida de pedestal", desc: "FOTO PANORAMICA DE ALTURA, LARGO Y ANCHO" },
  { id: "mp_04", name: "4. Limpieza de fanales", desc: "FOTOS LIMPIEZA DE FANALES Y FOTOCELDA" },
  { id: "mp_05", name: "5. Limpieza de pozos", desc: "FOTOS LIMPIEZA DE POZOS TIERRA, INCLUYE PINTADO" },
  { id: "mp_06", name: "6. Limpieza del site y Polimero", desc: "FOTOS DE LIMPIEZA DE PISOS, PAREDES, ESCALERILLA, BASTIDORES, POLIMERO O PVC EN TORRE" },
  { id: "mp_07", name: "7. Trabajo en contador", desc: "FOTOS PANORAMICA, LIMPIEZA Y MEDICION DE CONTADORES" },
  { id: "mp_08", name: "8. Aceitado en chapas y bisagras", desc: "FOTOS DE LIMPIEZA Y ACEITADO DE CHAPAS, BISAGRAS DE TODAS LAS PUERTAS EN SITE" },
  { id: "mp_09", name: "9. Validación de diagrama unifilar de tableros", desc: "FOTOS DIBUJAR EN HOJA EL DIAGRAMA ACTUAL DESDE SUMINISTRO HACIA TABLEROS INCLUYE TODAS LAS LLAVES" },
  { id: "mp_10", name: "10. Prueba de espesor", desc: "FOTOS DE ESPESOR DE PINTURA Y GALVANIZADO EN VALOR 'mils' EN VARIAS PARTES DE LA TORRE" },
  { id: "mp_11", name: "11. Prueba de adherencia", desc: "FOTOS DE CORTE, CINTA CERRADA, CINTA ABIERTA EN VARIAS PARTES DE LA TORRE" },
  { id: "mp_12", name: "12. Limpieza y engrase de BT", desc: "FOTOS ANTES, CON ESPATULA Y DESPUES ENGRASADO DE TODAS LAS BARRAS EN PISO Y TORRE" },
  { id: "mp_13", name: "13. Mantenimiento de tableros", desc: "FOTOS DE LIMPIEZA CON BROCHA Y TORQUE DE TODOS LOS TABLEROS EN LA ESTACION" },
  { id: "mp_14", name: "14. Medición de tableros", desc: "FOTOS DE MEDICIONES DE AMPERIOS (R,S,T) Y VOLTAJE (RS, RT, ST) EN I.G Y SALIDA DE EQUIPOS O TABLERO OPERADOR" },
  { id: "mp_15", name: "15. Limpieza de pedestal", desc: "FOTOS DE LIMPIEZA CON ESCOBA EN PEDESTAL Y BASE DE VIENTOS U ARRIOSTRES" },
  { id: "mp_16", name: "16. Mantenimiento y medidas de equipos en piso", desc: "FOTOS DE MANTENIMIENTO DE LIMPIEZA CON ESCOBA Y MEDICION CON WINCHA DE TODOS LOS EQUIPOS EN PISO (ANCHO, LARGO Y ALTURA)" },
  { id: "mp_17", name: "17. Brujula", desc: "FOTOS DE BRUJULA Y ESCRITO CON PLUMON EL AZIMUT EN LA PATA DE TORRE" },
  { id: "mp_18", name: "18. GPS", desc: "FOTOS PANORAMICA Y DE CERCA A GPS EN BASE DE TORRE, QUE SE NOTE LAS COORDENADAS (GRADOS, MINUTOS Y SEGUNDOS)" },
  { id: "mp_19", name: "19. Altura de edificio", desc: "ALTURA EDIFICIO, ALTURA PARAPETO, ALTURA ESCALERA AZOTEA" },
  { id: "mp_20", name: "20. Uso de nivel", desc: "FOTO PANORAMICA DE NIVEL EN MONTANTE DE TORRE, EN TORRE VENTADA, MASTIL Y AUTOSOPORTADA, MONOPOLO" },
  { id: "mp_21", name: "21. Aplicación de spray", desc: "FOTO APLICACION EN ACCESORIOS DE LINEA DE VIDA, ACCESORIOS DE VIENTOS, GRAMPAS Y GRILLETES SI ESTAN OXIDADOS" },
  { id: "mp_22", name: "22. Soportes vacios en torre, mastil, altura y azimut", desc: "FOTOS PANORAMICA DE TUBO, FOTO DE MEDIDA DE TUBO, AZIMUT, ALTURA EJE DE TUBO DE TODOS LOS SOPORTES VACIOS" },
  { id: "mp_23", name: "23. Vistas de las cordenadas de cada arista del site", desc: "FOTOS PANORAMICA DE GPS EN CADA ESQUINA DE SALA EQUIPOS, ESCRIBIR CON PLUMON A, B, C, D" },
  { id: "mp_24", name: "24. Vistas de las medidas del perimetro del site", desc: "FOTOS PANORAMICA Y CERCA DE MEDIDA DE WINCHA DE ANCHO, LARGO Y ALTURA DE SALA DE EQUIPO" },
  { id: "mp_25", name: "25. Mantenimiento de ramas y hojas del monopolo", desc: "FOTOS DE LIMPIEZA DE OJOS Y CAMBIO DE CINTILLO DE HOJAS EN MIMETIZADO SI APLICA" },
  { id: "mp_26", name: "26. Mantenimiento de aires forzados y video de funcionamiento", desc: "FOTOS DE PANORAMICA, LIMPIEZA, PLACAS, MEDICION DE INYECTOR Y EXTRACTOR, FOTOS EXTERIOR DE EXTRACTOR Y LIMPIEZA REJILLA" },
  { id: "mp_27", name: "27. Altura soporte ocupados", desc: "FOTOS PANORAMICA DE ALTURA DE EJE DE SOPORTES OCUPADOS. ESCRIBIR QUE OPERADOR Y EQUIPO ESTA EN ESE SOPORTE" },
  { id: "mp_28", name: "28. Vista de Azotea", desc: "FOTOS PANORAMICA DE AZOTEA DE PROPIETARIO POR LOS 4 LADOS" },
  { id: "mp_29", name: "29. Vista de Limpieza exterior 4 lados", desc: "FOTOS DE LIMPIEZA EXTERIOR, LIMPIAR BASURA Y MALEZA 1 METRO Y MEDIO APROX. FOTOS DE ANTES Y DESPUES" },
  { id: "mp_30", name: "30. Fotos del mtto de video camara", desc: "FOTOS DE LIMPIEZA DE CAMARA, TORQUE TABLERO. REINICIAR CAMARA SI REQUIERE, VERIFICAR FUNCIONAMIENTO CON CRISTIAN SALAZAR" }
];

// IndexedDB Setup
const DB_NAME = "SiteReportesDB_v5";
const DB_VERSION = 1;
let db = null;

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = (e) => {
      const database = e.target.result;
      if (!database.objectStoreNames.contains("sites")) {
        database.createObjectStore("sites", { keyPath: "id" });
      }
      if (!database.objectStoreNames.contains("files")) {
        const store = database.createObjectStore("files", { keyPath: "id" });
        store.createIndex("siteId", "siteId", { unique: false });
        store.createIndex("siteSub", ["siteId", "subfolderId"], { unique: false });
      }
    };
    req.onsuccess = (e) => { db = e.target.result; resolve(db); };
    req.onerror = (e) => reject(e.target.error);
  });
}

function dbGetAll(storeName) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, "readonly");
    const req = tx.objectStore(storeName).getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => reject(req.error);
  });
}

function dbPut(storeName, item) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, "readwrite");
    const req = tx.objectStore(storeName).put(item);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

function dbDelete(storeName, key) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, "readwrite");
    const req = tx.objectStore(storeName).delete(key);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

function dbGetFilesBySite(siteId) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction("files", "readonly");
    const idx = tx.objectStore("files").index("siteId");
    const req = idx.getAll(siteId);
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => reject(req.error);
  });
}

// Estado global de la app
let currentSite = null;
let currentTab = "f17";
let activeSubfolderId = null;
let preparedZipBlob = null;
let preparedZipFilename = "";
let objectUrls = [];

function showToast(msg, duration = 3000) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.style.display = "block";
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.display = "none"; }, duration);
}

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

function sanitizeFolderName(name) {
  return name.replace(/[\\/:*?"<>|]/g, "_").trim();
}

// Compresión inteligente: Si es imagen > 1MB y NO es subcarpeta de 30 grados, reduce peso por debajo de 1MB manteniendo nombre original
async function processFileForStorage(file, subfolderId) {
  const isHighResFolder = (subfolderId === "f17_15");
  const ONE_MB = 1024 * 1024;

  // Si no es imagen, o es menor/igual a 1MB, o es la carpeta de 30 grados -> guardar intacto con su nombre real
  if (!file.type.startsWith("image/") || file.size <= ONE_MB || isHighResFolder) {
    return {
      blob: file,
      fileName: file.name,
      mimeType: file.type || "application/octet-stream",
      size: file.size,
      compressed: false
    };
  }

  // Comprimir imagen > 1MB para que pese menos de 1MB conservando el nombre original
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = async () => {
      URL.revokeObjectURL(url);
      let width = img.width;
      let height = img.height;

      // Limitar dimensión máxima inicial a 1920px si es muy grande
      const MAX_DIM = 1920;
      if (width > MAX_DIM || height > MAX_DIM) {
        if (width > height) {
          height = Math.round((height * MAX_DIM) / width);
          width = MAX_DIM;
        } else {
          width = Math.round((width * MAX_DIM) / height);
          height = MAX_DIM;
        }
      }

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      let quality = 0.82;
      let resultBlob = null;

      for (let attempt = 0; attempt < 6; attempt++) {
        canvas.width = width;
        canvas.height = height;
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);

        resultBlob = await new Promise((res) => canvas.toBlob(res, "image/jpeg", quality));
        if (resultBlob && resultBlob.size <= ONE_MB) {
          break;
        }
        // Si aún supera 1MB, bajar calidad o reducir escala
        if (quality > 0.55) {
          quality -= 0.12;
        } else {
          width = Math.round(width * 0.8);
          height = Math.round(height * 0.8);
        }
      }

      if (!resultBlob || resultBlob.size >= file.size) {
        resolve({
          blob: file,
          fileName: file.name,
          mimeType: file.type,
          size: file.size,
          compressed: false
        });
      } else {
        resolve({
          blob: resultBlob,
          fileName: file.name, // Conserva exactamente el nombre original
          mimeType: "image/jpeg",
          size: resultBlob.size,
          compressed: true
        });
      }
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      resolve({
        blob: file,
        fileName: file.name,
        mimeType: file.type,
        size: file.size,
        compressed: false
      });
    };
    img.src = url;
  });
}

// Renderizar lista de Sites
async function renderSites() {
  const sites = await dbGetAll("sites");
  const allFiles = await dbGetAll("files");
  sites.sort((a, b) => b.createdAt - a.createdAt);

  const listEl = document.getElementById("sitesList");
  if (sites.length === 0) {
    listEl.innerHTML = `<div class="card" style="text-align:center;color:var(--muted);padding:24px;">No hay carpetas creadas. Crea una arriba para comenzar.</div>`;
    return;
  }

  listEl.innerHTML = sites.map(site => {
    const count = allFiles.filter(f => f.siteId === site.id).length;
    const dateStr = new Date(site.createdAt).toLocaleDateString("es-PE", { day: "2-digit", month: "2-digit", year: "numeric" });
    return `
      <div class="card" style="display:flex;justify-content:space-between;align-items:center;gap:10px;">
        <div style="flex:1;cursor:pointer;" onclick="openSite('${site.id}')">
          <div style="font-weight:800;font-size:1rem;color:var(--primary-dark);">📁 ${escapeHtml(site.name)}</div>
          <div style="font-size:0.78rem;color:var(--muted);margin-top:3px;">Creado: ${dateStr} • <strong>${count}</strong> archivo(s)</div>
        </div>
        <div style="display:flex;gap:6px;">
          <button class="btn btn-primary btn-sm" onclick="openSite('${site.id}')">Abrir</button>
          <button class="btn btn-danger btn-sm" onclick="deleteSite('${site.id}')">🗑️</button>
        </div>
      </div>
    `;
  }).join("");
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
}

async function openSite(siteId) {
  const sites = await dbGetAll("sites");
  currentSite = sites.find(s => s.id === siteId);
  if (!currentSite) return;

  document.getElementById("viewHome").classList.add("hidden");
  document.getElementById("viewSite").classList.remove("hidden");
  document.getElementById("btnBack").classList.remove("hidden");
  document.getElementById("headerTitle").textContent = currentSite.name;
  document.getElementById("currentSiteName").textContent = currentSite.name;
  document.getElementById("searchSubfolder").value = "";

  await renderSubfolders();
}

function goHome() {
  currentSite = null;
  clearObjectUrls();
  document.getElementById("viewSite").classList.add("hidden");
  document.getElementById("viewHome").classList.remove("hidden");
  document.getElementById("btnBack").classList.add("hidden");
  document.getElementById("headerTitle").textContent = "Mis Carpetas de Site";
  renderSites();
}

async function deleteSite(siteId) {
  if (!confirm("¿Seguro que deseas eliminar esta carpeta y todas sus fotos/videos?")) return;
  await dbDelete("sites", siteId);
  const files = await dbGetFilesBySite(siteId);
  for (const f of files) {
    await dbDelete("files", f.id);
  }
  showToast("Carpeta eliminada");
  renderSites();
}

function clearObjectUrls() {
  objectUrls.forEach(u => URL.revokeObjectURL(u));
  objectUrls = [];
}

function getSubfoldersForTab(tab) {
  if (tab === "f17") return F17_SUBFOLDERS;
  if (tab === "formatos") return FORMATOS_SUBFOLDERS;
  return MP_SUBFOLDERS;
}

async function renderSubfolders() {
  if (!currentSite) return;
  clearObjectUrls();

  const files = await dbGetFilesBySite(currentSite.id);
  const query = document.getElementById("searchSubfolder").value.toLowerCase().trim();
  const list = getSubfoldersForTab(currentTab).filter(sf =>
    !query || sf.name.toLowerCase().includes(query) || sf.desc.toLowerCase().includes(query)
  );

  const container = document.getElementById("subfoldersContainer");
  container.innerHTML = list.map(sf => {
    const sfFiles = files.filter(f => f.subfolderId === sf.id);
    const isHighRes = sf.highRes === true;
    const isFormatos = currentTab === "formatos";

    const mediaHtml = sfFiles.map(f => {
      const url = URL.createObjectURL(f.blob);
      objectUrls.push(url);
      let preview = "";
      if (f.mimeType === "application/pdf" || f.fileName.toLowerCase().endsWith(".pdf")) {
        preview = `<a href="${url}" target="_blank" class="pdf-thumb">📄 PDF<br><span style="font-size:0.65rem;font-weight:400;">Tocar para abrir</span></a>`;
      } else if (f.mimeType.startsWith("video/")) {
        preview = `<video src="${url}" class="media-thumb" controls></video>`;
      } else {
        preview = `<a href="${url}" target="_blank"><img src="${url}" class="media-thumb" alt="${escapeHtml(f.fileName)}" /></a>`;
      }

      return `
        <div class="media-card">
          ${preview}
          <button class="btn-del-media" onclick="deleteMedia('${f.id}')" title="Eliminar">×</button>
          <div class="media-meta">
            <div class="media-name" title="${escapeHtml(f.fileName)}">${escapeHtml(f.fileName)}</div>
            <div class="media-size">${formatBytes(f.size)}</div>
          </div>
        </div>
      `;
    }).join("");

    return `
      <div class="subfolder-item">
        <div class="subfolder-header" onclick="toggleSubfolder('${sf.id}')">
          <div style="flex:1;">
            <div class="subfolder-title">${escapeHtml(sf.name)}</div>
            <div class="subfolder-desc">${escapeHtml(sf.desc)}</div>
          </div>
          <span class="count-pill ${sfFiles.length > 0 ? 'has-files' : ''}">${sfFiles.length}</span>
        </div>
        <div class="subfolder-body" id="body_${sf.id}">
          ${isHighRes
            ? `<div class="hd-badge">⭐ Alta Resolución: Las fotos se guardan en calidad original sin reducir peso</div>`
            : `<div class="std-badge">⚡ Auto-optimización: Fotos &gt; 1 MB se ajustan a &lt; 1 MB conservando su nombre</div>`
          }
          <div class="row-actions" style="margin-top:4px;">
            <button class="btn btn-warning btn-sm" style="flex:1;" onclick="openTimestampModal('${sf.id}')">📷 Timestamp App</button>
            <button class="btn btn-primary btn-sm" style="flex:1;" onclick="triggerGalleryUpload('${sf.id}', ${isFormatos})">📂 ${isFormatos ? 'Subir Foto / PDF' : 'Galería / Archivos'}</button>
            <button class="btn btn-outline btn-sm" onclick="triggerDirectCamera('${sf.id}')">📸 Cámara</button>
          </div>
          <div class="media-grid">${mediaHtml}</div>
        </div>
      </div>
    `;
  }).join("");
}

function toggleSubfolder(sfId) {
  const el = document.getElementById("body_" + sfId);
  if (el) el.classList.toggle("open");
}

// Abrir modal Timestamp Camera (Pro y Gratis)
function openTimestampModal(sfId) {
  activeSubfolderId = sfId;
  document.getElementById("modalTimestamp").classList.add("show");
}

function launchAndroidApp(pkgName, fallbackUrl) {
  // Intent URL para Android que abre la app instalada sin forzar Play Store si no se desea
  const intentUri = `intent://#Intent;package=${pkgName};action=android.intent.action.MAIN;category=android.intent.category.LAUNCHER;end`;
  window.location.href = intentUri;
}

document.getElementById("btnOpenTsPro").addEventListener("click", () => {
  // Paquete oficial de Timestamp Camera Pro en Android
  launchAndroidApp("com.jeyluta.timestampcamerapro");
});

document.getElementById("btnOpenTsFree").addEventListener("click", () => {
  // Paquete oficial de Timestamp Camera Free en Android
  launchAndroidApp("com.jeyluta.timestampcamerafree");
});

document.getElementById("btnUploadAfterTs").addEventListener("click", () => {
  document.getElementById("modalTimestamp").classList.remove("show");
  if (activeSubfolderId) {
    triggerGalleryUpload(activeSubfolderId, currentTab === "formatos");
  }
});

document.getElementById("btnCloseTsModal").addEventListener("click", () => {
  document.getElementById("modalTimestamp").classList.remove("show");
});

// Subir desde galería/archivos conservando nombre real
function triggerGalleryUpload(sfId, allowPdf) {
  activeSubfolderId = sfId;
  const input = document.getElementById("inputGallery");
  input.accept = allowPdf ? "image/*,video/*,application/pdf,.pdf" : "image/*,video/*";
  input.value = "";
  input.click();
}

function triggerDirectCamera(sfId) {
  activeSubfolderId = sfId;
  const input = document.getElementById("inputDirectCam");
  input.value = "";
  input.click();
}

async function handleSelectedFiles(fileList) {
  if (!fileList || fileList.length === 0 || !currentSite || !activeSubfolderId) return;

  showToast(`Procesando ${fileList.length} archivo(s)...`, 4000);
  const existingFiles = await dbGetFilesBySite(currentSite.id);
  const existingNames = new Set(
    existingFiles.filter(f => f.subfolderId === activeSubfolderId).map(f => f.fileName)
  );

  for (const file of Array.from(fileList)) {
    const processed = await processFileForStorage(file, activeSubfolderId);

    // Conservar nombre original; solo si hay duplicado exacto en la misma subcarpeta agregar sufijo numérico
    let finalName = processed.fileName;
    if (existingNames.has(finalName)) {
      const dotIdx = finalName.lastIndexOf(".");
      const base = dotIdx > 0 ? finalName.slice(0, dotIdx) : finalName;
      const ext = dotIdx > 0 ? finalName.slice(dotIdx) : "";
      let counter = 2;
      while (existingNames.has(`${base}_${counter}${ext}`)) {
        counter++;
      }
      finalName = `${base}_${counter}${ext}`;
    }
    existingNames.add(finalName);

    const record = {
      id: "file_" + Date.now() + "_" + Math.random().toString(36).slice(2, 8),
      siteId: currentSite.id,
      subfolderId: activeSubfolderId,
      fileName: finalName,
      mimeType: processed.mimeType,
      size: processed.size,
      blob: processed.blob,
      createdAt: Date.now()
    };

    await dbPut("files", record);
  }

  const openId = activeSubfolderId;
  await renderSubfolders();
  const bodyEl = document.getElementById("body_" + openId);
  if (bodyEl) bodyEl.classList.add("open");
  showToast("Archivo(s) guardado(s) correctamente");
}

document.getElementById("inputGallery").addEventListener("change", (e) => handleSelectedFiles(e.target.files));
document.getElementById("inputDirectCam").addEventListener("change", (e) => handleSelectedFiles(e.target.files));

async function deleteMedia(fileId) {
  if (!confirm("¿Eliminar este archivo?")) return;
  await dbDelete("files", fileId);
  const openBodies = Array.from(document.querySelectorAll(".subfolder-body.open")).map(el => el.id);
  await renderSubfolders();
  openBodies.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add("open");
  });
  showToast("Archivo eliminado");
}

// Generar ZIP con estructura 1 - 2 - 3 y nombres reales
async function buildSiteZipBlob() {
  const files = await dbGetFilesBySite(currentSite.id);
  if (files.length === 0) {
    throw new Error("Esta carpeta aún no tiene fotos ni archivos.");
  }

  const zip = new JSZip();
  const rootName = sanitizeFolderName(currentSite.name) || "REPORTE_SITE";
  const rootFolder = zip.folder(rootName);

  const folder1 = rootFolder.folder("1. F17-CARPETA DE FOTOS");
  const folder2 = rootFolder.folder("2. FORMATOS MP");
  const folder3 = rootFolder.folder("3. MANTENIMIENTO PREVENTIVO");

  const mapF17 = Object.fromEntries(F17_SUBFOLDERS.map(s => [s.id, sanitizeFolderName(s.name)]));
  const mapMP = Object.fromEntries(MP_SUBFOLDERS.map(s => [s.id, sanitizeFolderName(s.name)]));

  for (const f of files) {
    if (mapF17[f.subfolderId]) {
      folder1.folder(mapF17[f.subfolderId]).file(f.fileName, f.blob);
    } else if (f.subfolderId === "fmt_general") {
      folder2.file(f.fileName, f.blob);
    } else if (mapMP[f.subfolderId]) {
      folder3.folder(mapMP[f.subfolderId]).file(f.fileName, f.blob);
    }
  }

  const blob = await zip.generateAsync({ type: "blob", compression: "STORE" });
  return { blob, filename: `${rootName}.zip` };
}

function triggerBlobDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}

// Botón Comprimir ZIP (Descarga directa)
document.getElementById("btnZipSite").addEventListener("click", async () => {
  const btn = document.getElementById("btnZipSite");
  btn.disabled = true;
  btn.textContent = "⏳ Comprimiendo...";
  try {
    const { blob, filename } = await buildSiteZipBlob();
    triggerBlobDownload(blob, filename);
    showToast(`ZIP descargado: ${filename}`);
  } catch (err) {
    alert(err.message || "Error al generar el ZIP");
  } finally {
    btn.disabled = false;
    btn.textContent = "📦 Comprimir ZIP";
  }
});

// Botón Compartir ZIP (Flujo de 2 pasos para evitar Permission Denied en Android)
document.getElementById("btnShareSite").addEventListener("click", async () => {
  const modal = document.getElementById("modalShare");
  const title = document.getElementById("shareModalTitle");
  const desc = document.getElementById("shareModalDesc");
  const actions = document.getElementById("shareReadyActions");

  preparedZipBlob = null;
  preparedZipFilename = "";
  title.textContent = "⏳ Preparando archivo ZIP...";
  desc.textContent = "Empaquetando carpetas y archivos. Esto tomará unos segundos.";
  actions.classList.add("hidden");
  modal.classList.add("show");

  try {
    const { blob, filename } = await buildSiteZipBlob();
    preparedZipBlob = blob;
    preparedZipFilename = filename;

    title.textContent = "✅ ZIP listo para compartir";
    desc.textContent = `Archivo: ${filename} (${formatBytes(blob.size)}). Presiona el botón verde para enviarlo.`;
    actions.classList.remove("hidden");
  } catch (err) {
    modal.classList.remove("show");
    alert(err.message || "Error al preparar el ZIP");
  }
});

document.getElementById("btnTriggerNativeShare").addEventListener("click", async () => {
  if (!preparedZipBlob) return;
  const file = new File([preparedZipBlob], preparedZipFilename, { type: "application/zip" });

  try {
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        files: [file],
        title: preparedZipFilename,
        text: `Reporte fotográfico ${currentSite ? currentSite.name : ""}`
      });
      document.getElementById("modalShare").classList.remove("show");
    } else {
      // Respaldo automático si el navegador no soporta compartir archivos ZIP
      triggerBlobDownload(preparedZipBlob, preparedZipFilename);
      showToast("Tu navegador no permite envío directo; se guardó en Descargas para adjuntarlo.");
      document.getElementById("modalShare").classList.remove("show");
    }
  } catch (err) {
    if (err.name !== "AbortError") {
      triggerBlobDownload(preparedZipBlob, preparedZipFilename);
      showToast("Se descargó el ZIP en tu celular para que puedas compartirlo desde WhatsApp/Drive.");
      document.getElementById("modalShare").classList.remove("show");
    }
  }
});

document.getElementById("btnDownloadPreparedZip").addEventListener("click", () => {
  if (!preparedZipBlob) return;
  triggerBlobDownload(preparedZipBlob, preparedZipFilename);
  showToast("ZIP guardado en Descargas");
});

document.getElementById("btnCloseShareModal").addEventListener("click", () => {
  document.getElementById("modalShare").classList.remove("show");
});

// Eventos principales
document.getElementById("btnCreateSite").addEventListener("click", async () => {
  const input = document.getElementById("newSiteName");
  const name = input.value.trim();
  if (!name) {
    alert("Escribe un nombre para la carpeta principal.");
    return;
  }
  const site = {
    id: "site_" + Date.now(),
    name,
    createdAt: Date.now()
  };
  await dbPut("sites", site);
  input.value = "";
  openSite(site.id);
});

document.getElementById("btnRenameSite").addEventListener("click", async () => {
  if (!currentSite) return;
  const newName = prompt("Nuevo nombre para la carpeta principal:", currentSite.name);
  if (newName && newName.trim()) {
    currentSite.name = newName.trim();
    await dbPut("sites", currentSite);
    document.getElementById("headerTitle").textContent = currentSite.name;
    document.getElementById("currentSiteName").textContent = currentSite.name;
    showToast("Nombre actualizado");
  }
});

document.getElementById("btnBack").addEventListener("click", goHome);

document.querySelectorAll(".tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    btn.classList.add("active");
    currentTab = btn.dataset.tab;
    renderSubfolders();
  });
});

document.getElementById("searchSubfolder").addEventListener("input", renderSubfolders);

// Inicializar Service Worker y App
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

openDB().then(() => {
  renderSites();
});
