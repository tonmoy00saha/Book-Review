import PropTypes from 'prop-types';
const BookdetailsTag = ({tag}) => {

    return (
        <div className="text-primary rounded-3xl py-2 px-4 bg-[#23BE0A0D] font-medium ">
        <h2>#{tag}</h2>
    </div>
    );
};
BookdetailsTag.prototypes={
    tag: PropTypes.string,
}
export default BookdetailsTag;