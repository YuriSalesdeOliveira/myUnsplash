import { Inertia } from "@inertiajs/inertia";
import { useEffect, useState } from "react";
import { Head } from "../../components/Head";
import { Layout } from "../../Layout";

export default function Unsplash({ photoCollection }) {
    const [search, setSearch] = useState('');

    useEffect(function() {

        Inertia.visit(`/${search}`, {
            preserveState: true
        });

    }, [search]);

    return (
        <>
            <Head>
                <title>Unsplash</title>
            </Head>

            <Layout setSearch={setSearch}>
                { photoCollection.map((photo, key) => (
                    <img src={photo.path} alt={photo.name} key={key}/>
                )) }
            </Layout>
        </>
    );
}