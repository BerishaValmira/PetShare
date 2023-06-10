import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { fetchPets, selectPets, selectState, createPet, selectCreateState } from './pets_slice'

const usePetsHook = () => {
    const dispatch = useAppDispatch();

    const data = useAppSelector(selectPets);
    const state = useAppSelector(selectState);

    const createState = useAppSelector(selectCreateState)

    const fetch = useCallback(() => dispatch(fetchPets()), [dispatch])
    const create = useCallback((formData: FormData) => dispatch(createPet(formData)), [dispatch])

    return {
        fetch,
        data,
        state,
        create,
        createState
    }

}

export { usePetsHook }