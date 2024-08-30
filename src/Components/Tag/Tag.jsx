import PropTypes from 'prop-types';

const Tag = ({tag}) => {
    return (
        <div className="text-primary rounded-3xl py-2 px-4 bg-[#23BE0A0D] font-medium worksans">
            <h2>{tag}</h2>
        </div>
    );
};
Tag.prototype={
    tag: PropTypes.string,
}
export default Tag;