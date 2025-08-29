import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./Work-experienceStyle.module.css";

function WorkExperience() {
    const titleRef = useRef(null);
    const isTitleInView = useInView(titleRef, { once: false, amount: 0.5 });

    const titleVariants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const jobs = [
        {
            title: "Practicante Desarrollador Full Stack",
            company: "Tendencia Perú",
            period: "Oct 2024 – Jul 2025",
            projects: [
                {
                    name: "SPEKTRO 360 – RBC Lab (Laboratorio óptico)",
                    tasks: [
                        "Backend con PHP (Laravel 10) y MySQL",
                        "Frontend con Vue.js, HTML, CSS, Bootstrap y AJAX/JQuery",
                        "Despliegue en cPanel",
                    ],
                },
                {
                    name: "Proyecto Hogar (Inmobiliaria)",
                    tasks: [
                        "Diseño de interfaces en Figma",
                        "Maquetación en HTML, CSS y JavaScript",
                        "Contenedorización con Docker y despliegue en OnRender",
                    ],
                },
            ],
        },
        {
            title: "Practicante Programador Backend",
            company: "Sistematic del Perú SAC",
            period: "May 2025 – Actualidad",
            projects: [
                {
                    name: "Sistema Web en Laravel 7",
                    tasks: [
                        "Mantenimiento y mejora continua",
                        "Corrección de errores reportados en producción",
                    ],
                },
            ],
        },
    ];

    return (
        <section id="work-experience" className={styles.container}>

            <motion.div
                ref={titleRef}
                initial="hidden"
                animate={isTitleInView ? "show" : "hidden"}
                variants={titleVariants}
                className={styles.header}
            >
                <p>Experiencia Laboral</p>
                <h1>Trabajos</h1>
            </motion.div>

            <div className={styles.timeline}>
                {jobs.map((job, i) => (
                    <TimelineCard key={i} job={job} />
                ))}
            </div>
        </section>
    );
}

import PropTypes from "prop-types";

function TimelineCard({ job }) {
    const cardRef = useRef(null);
    const isCardInView = useInView(cardRef, { once: false, amount: 0.3 });

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const dotVariants = {
        hidden: { scale: 0, opacity: 0 },
        show: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
    };

    return (
        <motion.div
            ref={cardRef}
            className={styles.timelineItem}
            initial="hidden"
            animate={isCardInView ? "show" : "hidden"}
            variants={cardVariants}
        >

            <motion.div
                className={styles.timelineDot}
                initial="hidden"
                animate={isCardInView ? "show" : "hidden"}
                variants={dotVariants}
            />

            <div className={styles.timelineContent}>
                <h2>{job.title}</h2>
                <h3>
                    {job.company} <span>• {job.period}</span>
                </h3>
                {job.projects.map((p, idx) => (
                    <div key={idx} className={styles.project}>
                        <h4>{p.name}</h4>
                        <ul>
                            {p.tasks.map((task, j) => (
                                <li key={j}>{task}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

TimelineCard.propTypes = {
    job: PropTypes.shape({
        title: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        period: PropTypes.string.isRequired,
        projects: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                tasks: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
            })
        ).isRequired,
    }).isRequired,
};

export default WorkExperience;