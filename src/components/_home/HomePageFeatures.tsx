import Feature from "../_contents/Feature";
import { FeatureList } from "../_data/DataFeature";


export default function HomepageFeatures() {
    return (
        <section
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '20px',
                marginTop: '40px',
                marginBottom: '40px',
            }}>
            {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
            ))}
        </section>
    );
}