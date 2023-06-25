import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'
import axios from 'axios';

type ReduxState = "success" | "failure" | "loading" | "idle"

type SortDirection = "ASC" | "DESC"

interface CounterState {
    pets?: PetsData,
    state: ReduxState,
    createdState: ReduxState
}

export type PetsData = {
    page: number
    total: number
    size: number
    sortedColumn: string,
    data: any[]
}

interface PetsQueryParams extends URLSearchParams {
    page?: number,
    size?: number
    sortDirection?: SortDirection
    sortColumn?: string
}

export type PetsRequest = {
    params?: PetsQueryParams
}

const BASE_URL = 'http://localhost:8081/api/v1/pet';

const initialState: CounterState = {
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

export const fetchPets = createAsyncThunk<any, PetsRequest>(
    'pets/fetch',
    async ({ params }) => {
        const response = await axios.get(BASE_URL, { params });
        return response.data;
    }
)

const counterSlice = createSlice({
    name: 'pets',
    initialState,
    reducers: {
        clear: () => initialState
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
export const { clear } = counterSlice.actions;
export default counterSlice.reducer;
