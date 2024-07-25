export type FeatureItem = {
    title: string;
    png: string;
    description: JSX.Element;
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
    },
    {
        title: 'Cyber Security',
        png: require('@site/static/img/cysec.png').default,
        description: (
            <>
                Mau ngehack mantan? Mau kerja di Kominfo? Watch Dogs Simulator? Cyber Security aja gasih?
            </>
        ),
    },
    {
        title: 'Internet of Things',
        png: require('@site/static/img/iot.png').default,
        description: (
            <>
                Mau masuk Teknik Komputer tapi ga kesampaian? Mau bikin jebakan buat adek dirumah? IoT solusi mu dek.
            </>
        ),
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
    },
];