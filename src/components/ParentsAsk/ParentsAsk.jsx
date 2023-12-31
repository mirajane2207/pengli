import React from 'react'
import classes from './ParentsAsk.module.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import ParentsAskItem from '../ParentsAskItem/ParentsAskItem'

const ParentsAsk = () => {
    return (
        <div className={classes.parents_ask__container} id='parentsAsk'>
            <SectionTitle>Батьки питають</SectionTitle>
            <div className={classes.parents_ask__content_container}>
                <hr />
                <ParentsAskItem title='Яка тривалість уроку?' text='Для дітей віком до 9 років ми встановили тривалість заняття 40 хв, саме цей час є оптимальним для маленьких діток, яким важко всидіти на одному місці та зосередитись на виконанні завдань протягом довгого часу. Для дітей старше 9 років тривалість заняття 55 хв.'/>
                <ParentsAskItem title='Де проходить урок?' text='Урок проходить на одній із наступних платформ - Zoom або Skype. Ви самі можете обрати де займатись вам зручніше та комфортніше.'/>
                <ParentsAskItem title='Чи даються домашні завдання та в якому форматі?' text='За побажанням батьків наші викладачі можуть давати учням домашні завдання у вигляді вправ та різноманітних вікторин, однак це для нашої школи не є в пріоритеті. Наприкінці кожного заняття учень отримує презентацію, створену в ігровому форматі, з допомогою якої може повторити вивчені впродовж уроку слова, фрази, граматичні правила та конструкції. Час від часу ми пропонуємо учням взяти участь у цікавих, творчих проектах, за які вони можуть отримати додаткові бали.'/>
                <ParentsAskItem title='Що таке система винагород та як вона працює?' text='Ми розуміємо, що мотивація до навчання відіграє не останню роль для отримання успішних результатів, тому за уважність та старанне виконання всіх завдань під час заняття учень отримує кульки морозива від нашого пінгвінчика Pengli. Назбиравши певну кількість кульок дитина може обміняти їх на 15 хв перегляду улюбленого мультфільму або проходження улюбленої гри, на можливість самостійно обрати тему наступного уроку та інші цікаві бонуси. '/>
                <ParentsAskItem title='Скільки дітей у групі?' text='Максимальна кількість учнів у групі - 5 дітей. В такій команді викладач може приділити достатньо уваги кожній дитині. Крім того діти мають можливість проводити діалоги та розігрувати різноманітні ситуації, що зазвичай є найцікавішою та найкориснішою частиною заняття, адже вони практикують саме використання живої мови у спілкуванні. '/>
            </div>
        </div>
    )
}

export default ParentsAsk
