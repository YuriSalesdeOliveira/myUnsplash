import { Inertia } from "@inertiajs/inertia";
import { useEffect, useState } from "react";
import { Head } from "../../components/Head";
import { Masonry } from "../../components/Masonry";
import { Layout } from "../../Layout";
import { Img } from "./style"

export default function Unsplash({ photoCollection }) {
    const [search, setSearch] = useState('');

    useEffect(function() {

        Inertia.visit(`/${search}`, { preserveState: true });

    }, [search]);

    return (
        <>
            <Head>
                <title>Unsplash</title>
            </Head>

            <Layout setSearch={setSearch}>
                <Masonry columns={4}>
                    {photoCollection.map((photo, key) => (
                        <Img src={photo.path} alt={photo.name} key={key}/>
                    ))}
                </Masonry>
            </Layout>
        </>
    );
}