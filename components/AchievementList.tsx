import data from './data/achievements.json'

const ConditionalWrapper = ({ children, condition} : {children: JSX.Element, condition: boolean}) => {
  return condition ? (
      <b>{children}</b>
  ) : (
      children
  )
}
const AchievementList = (): JSX.Element => {
    return (
        <section className="grid w-full" id="achievements">
            <h2 className="text-xl font-bold mt-12 mb-4">Achievements</h2>
   
            <div>
              {data.map((achievement, index) => (
                <div className = "mt-4" key={index}>
                  <p className = "text-base text-gray-600">
                    <ConditionalWrapper condition={achievement.highlight}>
                      <span>
                        {achievement.award}
                      </span>
                    </ConditionalWrapper>
                  </p>
                  <p className = "text-sm text-gray-400">{achievement.event}, {achievement.year}</p>
                </div>       
              ))}
            </div>

        </section>
    );
};



export default AchievementList;
