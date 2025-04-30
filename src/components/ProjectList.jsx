import './ProjectList.css';
// import PropTypes from 'prop-types';

const ProjectList = ({ projects }) => {
  return (
    <div className="projects-list">
      {projects.length === 0 ? (
        <p className="no-projects">Нет проектов для отображения</p>
      ) : (
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={`${project.category}-${index}`} className="project-card">
              <img 
                src={project.img} 
                alt={project.category} 
                className="project-image"
              />
              <p className="project-category">{project.category}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ProjectList.propTypes = {
//   projects: PropTypes.arrayOf(
//     PropTypes.shape({
//       img: PropTypes.string.isRequired,
//       category: PropTypes.string.isRequired
//     })
//   ).isRequired
// };

export default ProjectList;