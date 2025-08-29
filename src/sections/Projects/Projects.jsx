import { motion, useScroll, useTransform } from 'framer-motion';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { FaGitlab, FaLaravel, FaPhp } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';
import bootstrapLogo from '../../assets/bootstrap-logo.png';
import codeIcon from '../../assets/favicon.ico';
import javaLogo from '../../assets/java-logo.png';
import vuejsLogo from '../../assets/vuejs-logo.png';
import styles from './ProjectsStyles.module.css';

const ProjectCard = ({ project, progress }) => {
    // Animaciones basadas en el scroll progress
    const opacity = useTransform(progress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const y = useTransform(progress, [0, 0.3, 0.7, 1], [50, 0, 0, -50]);
    const scale = useTransform(progress, [0, 0.3, 1], [0.9, 1, 0.9]);

    return (
        <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCard}
            style={{
                backgroundColor: project.bg,
                opacity,
                y,
                scale
            }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            aria-label={`Ver proyecto ${project.title}`}
        >
            <motion.img
                src={project.image}
                className={styles.projectImage}
                loading="lazy"
                alt={project.title}
                style={{
                    opacity: useTransform(progress, [0, 0.4, 0.6, 1], [0, 1, 1, 0])
                }}
            />
            <div className={styles.projectContent}>
                <motion.h1
                    className={styles.projectTitle}
                    style={{
                        opacity: useTransform(progress, [0, 0.5, 0.5, 1], [0, 1, 1, 0]),
                        y: useTransform(progress, [0, 0.5, 1], [20, 0, -20])
                    }}
                >
                    {project.title}
                </motion.h1>

                <motion.span
                    style={{
                        opacity: useTransform(progress, [0, 0.6, 0.6, 1], [0, 1, 1, 0])
                    }}
                >
                    {project.empresa}
                    <br />
                    {project.fecha}
                </motion.span>

                <motion.h5
                    style={{
                        opacity: useTransform(progress, [0, 0.7, 0.7, 1], [0, 1, 1, 0])
                    }}
                >
                    {project.puesto}
                </motion.h5>

                <motion.p
                    className={styles.projectDescription}
                    style={{
                        opacity: useTransform(progress, [0, 0.8, 0.8, 1], [0, 1, 1, 0])
                    }}
                >
                    {project.description}
                </motion.p>

                <motion.div
                    className={styles.projectIcons}
                    style={{
                        opacity: useTransform(progress, [0, 0.9, 0.9, 1], [0, 1, 1, 0])
                    }}
                >
                    {project.icons.map((icon, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {icon.icon}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.a>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        empresa: PropTypes.string.isRequired,
        fecha: PropTypes.string.isRequired,
        puesto: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        bg: PropTypes.string,
        icons: PropTypes.arrayOf(PropTypes.shape({
            icon: PropTypes.element.isRequired
        })).isRequired,
        url: PropTypes.string.isRequired,
    }).isRequired,
    progress: PropTypes.object.isRequired,
};

const Projects = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const projects = [
        {
            title: "RBC LAB",
            empresa: "SPEKTRO 360",
            fecha: "Octubre 2024 - Diciembre 2024",
            puesto: "Practicante Desarrollador Full Stack",
            description: "Sistema administrativo para el laboratorio óptico.",
            image: codeIcon,
            bg: "#c85dd7",
            icons: [
                { icon: <FaPhp style={{ color: '#7a5bc5' }} size={30} /> },
                { icon: <FaLaravel style={{ color: '#cc2927' }} size={20} /> },
                { icon: <img src={vuejsLogo} alt="Vue.js" width={25} height={25} /> },
                { icon: <img src={bootstrapLogo} alt="Bootstrap" width={25} height={25} /> },
                { icon: <FaGitlab style={{ color: '#d83b01' }} size={20} /> },
            ],
            url: ""
        },
        {
            title: "Proyecto Hogar",
            empresa: "Tendencia Perú",
            fecha: "Marzo 2025 - Actualidad",
            puesto: "Practicante Desarrollador Full Stack",
            description: "Portal web para la empresa de servicios inmobiliarios.",
            image: codeIcon,
            bg: "#d7a15d",
            icons: [
                { icon: <img src={javaLogo} alt="Java" width={30} height={30} /> },
                { icon: <SiSpringboot style={{ color: '#47a248' }} size={20} /> },
                { icon: <img src={bootstrapLogo} alt="Bootstrap" width={25} height={25} /> },
                { icon: <FaGitlab style={{ color: '#d83b01' }} size={20} /> }
            ],
            url: ""
        }
    ];

    return (
        <section id="projects" className={styles.projectsSection} ref={sectionRef}>
            <motion.div
                style={{
                    opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]),
                    y: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [30, 0, 0, -30])
                }}
            >
                <p>Experiencia Profesional</p>
                <h1 className="sectionTitle">Proyectos</h1>
            </motion.div>

            <div className={styles.projectsGrid}>
                {projects.map((project, idx) => (
                    <ProjectCard
                        key={`${project.title}-${idx}`}
                        project={project}
                        progress={scrollYProgress}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;