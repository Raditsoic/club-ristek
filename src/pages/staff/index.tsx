import Link from '@docusaurus/Link'
import Layout from '@theme/Layout'
import React from 'react'
import CardStaff from './_components/CardStaff'

export default function PageHEHEH() {
    return (
        <Layout
            title="STAFF HMIT"
            description="Ristek HMIT Club"
        >
            <div>
                <div className="container margin-vert--lg">
                    <div className="row">
                        <main className="col col--12">
                            <article className="margin-bottom--xl">
                                <header>
                                    <h2 className="title_node_modules-@docusaurus-theme-classic-lib-theme-BlogPostItem-Header-Title-styles-module margin-bottom--md">
                                        <Link href="https://instagram.com/hmit_its">
                                            RISTEK HMIT
                                        </Link>
                                    </h2>
                                    <CardStaff />
                                </header>
                            </article>
                        </main>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
