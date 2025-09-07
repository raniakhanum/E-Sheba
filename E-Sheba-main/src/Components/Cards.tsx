import { FaVirusCovid } from "react-icons/fa6";
import { PiBowlFoodDuotone } from "react-icons/pi";
import { BsLungsFill } from "react-icons/bs";
import { RiMentalHealthLine } from "react-icons/ri";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const cards = [

    {
        title: <h2 className="text-xl font-extrabold">Covid-19 Test</h2>,
        description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        icon: <FaVirusCovid className="text-3xl text-[var(--darkBlue)]" />,
    },
    {
        title: <h2 className="text-xl font-extrabold">Heart Lungs</h2>,
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        icon: <BsLungsFill className="text-3xl text-[var(--darkBlue)]" />
    },
    {
        title: <h2 className="text-xl font-extrabold">Supplements</h2>,
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        icon: <PiBowlFoodDuotone className="text-3xl text-[var(--darkBlue)]" />
    },
    {
        title: <h2 className="text-xl font-extrabold">Mental Health</h2>,
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        icon: <RiMentalHealthLine className="text-3xl text-[var(--darkBlue)]" />
    },
];

function SelectActionCard() {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(250px, 100%), 1fr))',
                gap: 4,
            }}
        >
            {cards.map((card) => (
                <Card className='my-5'>
                    <CardActionArea
                    >
                        <CardContent   data-aos="fade-left" data-aos-duration="1500" className='h-60 flex flex-col gap-3 px-5 hover:bg-[var(--darkBlue)] rounded-xl border-1 border-[var(--Black)] hover:text-white transition-all duration-300'>
                            <div className="w-16 h-16 bg-[var(--lightBlue)] rounded-full flex items-center justify-center mb-2">
                                {card.icon}
                            </div>
                            <Typography>
                                {card.title}
                            </Typography>
                            <Typography variant="body2" className='hover:text-white text-xs font-medium'>
                                {card.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Box>
    );
}


const CardSection = () => {
    return (
        <div className='min-h-[500px] p-10 my-5 sm:my-10 md:my-20 px-5 lg:px-20'>
            <h1 className='group text-3xl sm:text-5xl font-bold mb-5 grid gap-2' data-aos="fade-right" data-aos-duration="1200">Our Consulting Specialists
                <div className="bg-[var(--darkBlue)] rounded-2xl h-[3px] w-0 transition-all duration-500 group-hover:w-130"></div>
            </h1>

            <SelectActionCard />
        </div>
    )
}


export default CardSection;