import PropTypes from 'prop-types';

const Feature = ({ icon: Icon, title, description }) => {
  return (
    <div className="rounded-2xl px-4 bg-transparent border-primary-light border-2 flex flex-col justify-evenly min-h-56">
      <div className="w-full">
        <div className="w-16 aspect-square rounded-full p-1 bg-primary flex justify-center items-center">
          <div className="rounded-full p-3 bg-gradient-to-b from-tertiary to-primary flex justify-center items-center">
            {Icon && <Icon className="text-white size-8" />}
          </div>
        </div>
      </div>

      <div className="w-full">
        <h2 className="text-white font-medium text-lg">{title}</h2>
      </div>
      <div className="w-full">
        <p className="text-neutral-300 text-sm font-light">{description}</p>
      </div>
    </div>
  );
};

Feature.propTypes = {
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }

export default Feature;
