import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'
import axios from 'axios';

type ReduxState = "success" | "failure" | "loading" | "idle"

interface CounterState {
    pets: any[],
    state: ReduxState,
    createdState: ReduxState
}

const BASE_URL = 'http://localhost:8081/api/v1/pet';

const initialState: CounterState = {
    pets: [],
    state: "idle",
    createdState: "idle"
}

export const createPet = createAsyncThunk(
    'pets/add',
    async (petData: FormData) => {
        const response = await axios.post(BASE_URL, petData, { headers: { 'Content-Type': 'multipart/form-data' } });
        return response.data;
    }
)

export const fetchPets = createAsyncThunk(
    'pets/fetch',
    async () => {
        const response = await axios.get(BASE_URL);
        return response.data;
    }
)

const counterSlice = createSlice({
    name: 'pets',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPets.fulfilled, (state, action: PayloadAction<any>) => {
            state.pets = action.payload
            state.state = 'success'
        })
        builder.addCase(fetchPets.pending, (state) => {
            state.state = 'loading'

        })
        builder.addCase(fetchPets.rejected, (state) => {
            state.state = 'failure'
        })
        builder.addCase(createPet.fulfilled, (state, action: PayloadAction<any>) => {
            state.createdState = 'success'
        })
        builder.addCase(createPet.pending, (state) => {
            state.createdState = 'loading'

        })
        builder.addCase(createPet.rejected, (state) => {
            state.createdState = 'failure'
        })
    }
});

export const selectPets = (state: RootState) => state.counter.pets;
export const selectState = (state: RootState) => state.counter.state;
export const selectCreateState = (state: RootState) => state.counter.createdState;
export default counterSlice.reducer;
