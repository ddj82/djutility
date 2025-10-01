'use client';
import React from 'react';
import Link from "next/link";

export default function Main() {

    return (
        <div>
            <ul>
                <li>
                    <Link href="/tools/alert" className="underline">Alert</Link>
                </li>
                <li>
                    <Link href="/tools/list" className="underline">list</Link>
                </li>
            </ul>
        </div>
    );
};
