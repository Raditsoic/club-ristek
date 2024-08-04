export type FeatureItem = {
    title: string;
    png: string;
    description: JSX.Element;
    href: string;
};

export const FeatureList: FeatureItem[] = [
    {
        title: 'Artificial Intelligence',
        png: require('@site/static/img/ai.png').default,
        description: (
            <>
                NT terus dek? Bikin anime kamu jadi nyata pake AI aja gasih? Cita-cita club ini adalah membuat GPT sendiri heheh...
                atau bikin robot aja ya?
            </>
        ),
        href: '/docs/category/artificial-intelligence',
    },
    {
        title: 'Cyber Security',
        png: require('@site/static/img/cysec.png').default,
        description: (
            <>
                Mau ngehack mantan? Mau kerja di Kominfo? Watch Dogs Simulator? Cyber Security aja gasih?
            </>
        ),
        href: '/docs/category/cyber-security',
    },
    {
        title: 'Internet of Things',
        png: require('@site/static/img/iot.png').default,
        description: (
            <>
                Mau masuk Teknik Komputer tapi ga kesampaian? Mau bikin jebakan buat adek dirumah? IoT solusi mu dek.
            </>
        ),
        href: '/docs/category/iot',
    },
    {
        title: 'Web Development',
        png: require('@site/static/img/webdev.png').default,
        description: (
            <>
                Kalian beban keluarga? Dibanding-bandingin sama anak tetangga? Mau gaji 2 digit perbulan?
                Web Dev jawabannya.
            </>
        ),
        href: '/docs/category/web-development',
    },
];