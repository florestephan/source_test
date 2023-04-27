import {useEffect} from "react";

export default function Movies() {

    const getMovies = async () => {
        const response = await fetch('https://raw.githubusercontent.com/florestephan/source_test/main/src/data.json?token=GHSAT0AAAAAAB6GPUTK7WTAWSCYTY3CXSAYZCKF2VA')
        const result = await response.json()
        console.log(result)
    }

    useEffect(() => {
        getMovies()
    }), []


}