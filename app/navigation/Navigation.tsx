'use client';

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from '@/app/navigation/navigation.module.css';

type NavLink = {
    id: string;
    href: string;
    text: string;
}

export const Navigation: FC = () => {
    const pathname = usePathname();

    const links: NavLink[] = [
        {
            id: 'parkingAreas',
            href: '/parkingAreas',
            text: 'Manage areas'
        },
        {
            id: 'payment',
            href: '/payment',
            text: 'Payment'
        },
    ];

    return (
        <div className={styles.navigationWrapper}>
            {links.map(link => (
                <Link
                    key={link.id}
                    href={link.href}
                    style={{ fontWeight: pathname === link.href ? "bold" : "300" }}
                >
                    {link.text}
                </Link>
            ))}
        </div>
    );
};