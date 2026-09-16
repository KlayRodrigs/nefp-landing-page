import { useState, useEffect } from 'react';
import { fetchSheetData } from '../services/sheetsService';
import { SHEETS_CONFIG } from '../config/sheets';

import { team as localTeam } from '../data/team';
import { publications as localPubs } from '../data/publications';
import { workshops as localWorkshops } from '../data/workshops';
import { gallery as localGallery } from '../data/gallery';
import { fundingPartners as localFundingPartners } from '../data/fundingPartners';

export function useTeamData() {
  const [data, setData] = useState(localTeam);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      const result = await fetchSheetData(SHEETS_CONFIG.TABS.TEAM, localTeam);
      if (isMounted) {
        setData(result);
        setLoading(false);
      }
    }
    load();
    return () => { isMounted = false; };
  }, []);

  return { team: data, loading };
}

export function usePublicationsData() {
  const [data, setData] = useState(localPubs);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      const result = await fetchSheetData(SHEETS_CONFIG.TABS.PUBLICATIONS, localPubs);
      if (isMounted) {
        setData(result);
        setLoading(false);
      }
    }
    load();
    return () => { isMounted = false; };
  }, []);

  return { publications: data, loading };
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

export function useGalleryData() {
  const [data, setData] = useState(localGallery);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      const result = await fetchSheetData(SHEETS_CONFIG.TABS.GALLERY, localGallery);
      if (isMounted) {
        setData(result);
        setLoading(false);
      }
    }
    load();
    return () => { isMounted = false; };
  }, []);

  return { gallery: data, loading };
}

export function useFundingPartnersData() {
  const [data, setData] = useState(localFundingPartners);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      const result = await fetchSheetData(SHEETS_CONFIG.TABS.PARTNERS, localFundingPartners);
      if (isMounted) {
        setData(result);
        setLoading(false);
      }
    }
    load();
    return () => { isMounted = false; };
  }, []);

  return { partners: data, loading };
}