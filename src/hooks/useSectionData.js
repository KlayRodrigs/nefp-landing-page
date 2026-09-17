import { useState, useEffect } from 'react';
import { fetchSheetData } from '../services/sheetsService';

export function useGoogleSheetsData({ tabName, dataName }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      try {
        const result = await fetchSheetData(tabName);
        if (isMounted) {
          setData(result ?? []);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
          setData([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    load();
    return () => { isMounted = false; };
  }, []);

  return { [dataName]: data, loading, error };
}

export function useWorkshopsData() {
  const [data, setData] = useState(localWorkshops);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      const result = await fetchSheetData(SHEETS_CONFIG.TABS.WORKSHOPS, localWorkshops);
      if (isMounted) {
        setData(result);
        setLoading(false);
      }
    }
    load();
    return () => { isMounted = false; };
  }, []);

  return { workshops: data, loading };
}
