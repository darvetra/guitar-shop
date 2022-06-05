import {useEffect, useState} from 'react';
import {GuitarType} from '../types/types';
import {api} from '../services/api';
import {APIRoute, FAIL_MESSAGE, LoadingStatus} from '../const';
import {toast} from 'react-toastify';

export const useFetchGuitar = (id: string) => {
  const [guitar, setGuitar] = useState<GuitarType | null>(null);
  const [loadStatus, setLoadStatus] = useState<string>(LoadingStatus.Loading);

  const execute = () => {
    setLoadStatus(LoadingStatus.Loading);
    api.get<GuitarType>(`${APIRoute.Guitars}/${id}`)
      .then((response) => {
        const data = response.data;
        setGuitar(data);
        setLoadStatus(LoadingStatus.Complete);
      })
      .catch(() => {
        setLoadStatus(LoadingStatus.Error);
        toast.info(FAIL_MESSAGE);
      });
  };

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    void execute();
  }, [id]);

  return {guitar, loadStatus};
};
