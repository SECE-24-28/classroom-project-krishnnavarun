
const StudentCard = (props) => {
    const {fname,lname,phone,age} = props;
    return (
        <>

        <div className = "text-red-700 text-center text-2xl font-bold m-4 bg-white shadow-xl p-10">
            firstName : {fname} <br/>
            LastName : {lname} <br/>
            FullName : {fname} {lname}
            <br/>
            mobileNo : {phone}
            <br/>
            Age : {age}
      </div>


        </>
    );
};


export default StudentCard;