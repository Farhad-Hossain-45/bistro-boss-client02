

const Cover = ({ img, title, subTitle }) => {
    return (
        <div>
            <div className="hero min-h-screen mb-20 h-[600px]" style={{ backgroundImage: `url("${img}")` }}>
                <div className="hero-overlay"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" bg-black opacity-50 md:w-[1000px] h-[200px] md:h-[300px] flex flex-col justify-center items-center">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">{subTitle}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;