import ExtLink from './ExtLink'
import data from './data/personalInfo.json'

const Education = (): JSX.Element => {
    return (
        <section className="grid" id="education">
            <h2 className="text-xl font-bold mt-12 mb-4">Education</h2>
                {
                    data.education.map((education, index) => {
                        return <div className = "mt-4"><p className = "text-base text-gray-600">{education.degree}</p>
                        <p className = "text-sm text-gray-400">{education.institution}</p>
                        </div>
                    })
                }
        </section>
    );
};



export default Education;
