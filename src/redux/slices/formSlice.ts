import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Solicitud {
  id: number;
  rut: string;
  vendedor: string;
  marca: string;
  modelo: string;
  patente: string;
  precio: number;
  fecha: string;
}

export interface FormState {
  solicitudes: Solicitud[];
}

const initialState: FormState = {
  solicitudes: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addSolicitud: (state, action: PayloadAction<Solicitud>) => {
      state.solicitudes.push(action.payload);
    },
    removeSolicitud: (state, action: PayloadAction<number>) => {
      state.solicitudes = state.solicitudes.filter(solicitud => solicitud.id !== action.payload);
    },
  },
});

export const { addSolicitud, removeSolicitud } = formSlice.actions;

export default formSlice.reducer;