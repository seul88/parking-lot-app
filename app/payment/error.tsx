'use client';

export default function Error({ error }: {error: Error & { digest?: string }}) {
    return (
        <div>
            Cannot process the payment calculation:
            <div>{error.message}</div>
        </div>
    );
};