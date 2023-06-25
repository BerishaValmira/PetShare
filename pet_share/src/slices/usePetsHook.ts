import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { fetchPets, selectPets, selectState, createPet, selectCreateState, clear, PetsRequest } from './pets_slice'

const usePetsHook = () => {
    const dispatch = useAppDispatch();

    const data = useAppSelector(selectPets);
    const state = useAppSelector(selectState);

    const createState = useAppSelector(selectCreateState)

    const fetch = useCallback((params: PetsRequest) => dispatch(fetchPets(params)), [dispatch])
    const create = useCallback((formData: FormData) => dispatch(createPet(formData)), [dispatch]);

    const clr = useCallback(() => dispatch(clear()), [dispatch])

    return {
        fetch,
        data,
        state,
        create,
        createState,
        clr
    }

}

export { usePetsHook }