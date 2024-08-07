import Link from '@docusaurus/Link'
import React from 'react'
import { dataStaff } from '../_data/data-staff'

export default function CardStaff() {
    return (
        <>
            <div className="margin-top--md margin-bottom--sm row" style={{ gap: '1rem' }}>
                {
                    dataStaff.map((staff, idx) => (
                        <div className="col col--4">
                            <div className="avatar margin-bottom--sm" key={idx}>
                                <Link href={staff.github}
                                    target="_blank" rel="noopener noreferrer"
                                    className="avatar__photo-link">
                                    <img className="avatar__photo"
                                        src={staff.image} alt={staff.name} />
                                </Link>
                                <div className="avatar__intro">
                                    <div className="avatar__name">
                                        <Link href={staff.github} target="_blank" rel="noopener noreferrer">
                                            <span>
                                                {staff.name}
                                            </span>
                                        </Link>
                                    </div>
                                    <small className="avatar__subtitle">
                                        {staff.desc}
                                    </small>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
