import { SHEETS_CONFIG } from '../config/sheets';

/**
 * Busca dados de uma aba do Google Sheets via OpenSheet API com fallback local resiliente.
 * @param {string} tabName - Nome da aba na planilha
 * @param {Array} fallbackData - Dados padrão caso a planilha esteja vazia ou offline
 */
export async function fetchSheetData(tabName, fallbackData = []) {
  const { SPREADSHEET_ID } = SHEETS_CONFIG;

  if (!SPREADSHEET_ID) {
    return fallbackData;
  }

  try {
    const url = `https://opensheet.elk.sh/${SPREADSHEET_ID}/${encodeURIComponent(tabName)}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro na resposta da planilha: ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data) || data.length === 0) {
      return fallbackData;
    }

        // Normaliza campos para os tipos esperados pelo React
    return data.map((item) => {
      const normalized = { ...item };

      // Normaliza campo visivel (se não informado, assume true)
      if (normalized.visivel !== undefined && normalized.visivel !== null && normalized.visivel !== '') {
        const v = String(normalized.visivel).trim().toLowerCase();
        normalized.visivel = v === 'true' || v === '1' || v === 'sim' || v === 'yes';
      } else {
        normalized.visivel = true;
      }

      // Se id for string numérica, converte para número ou mantém string
      if (normalized.id && !isNaN(normalized.id)) {
        normalized.id = Number(normalized.id);
      }

      // Converte listas separadas por ';' em arrays
      if (typeof normalized.highlights === 'string') {
        normalized.highlights = normalized.highlights
          .split(';')
          .map((s) => s.trim())
          .filter(Boolean);
      }

      if (typeof normalized.disciplines === 'string') {
        normalized.disciplines = normalized.disciplines
          .split(';')
          .map((s) => s.trim())
          .filter(Boolean);
      }

      if (typeof normalized.tags === 'string') {
        normalized.tags = normalized.tags
          .split(';')
          .map((s) => s.trim())
          .filter(Boolean);
      }

      if (typeof normalized.topics === 'string') {
        normalized.topics = normalized.topics
          .split(';')
          .map((s) => s.trim())
          .filter(Boolean);
      }

      return normalized;
    });
  } catch (error) {
    console.warn(`[Google Sheets] Não foi possível carregar a aba "${tabName}", usando dados locais:`, error);
    return fallbackData;
  }
}
