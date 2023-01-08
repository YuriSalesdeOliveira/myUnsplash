import { Head as HeadInertia } from "@inertiajs/inertia-react";

export function Head(props) {
    return (
        <HeadInertia {...props}>{props.children}</HeadInertia>
    );
}