import Image from 'next/image';

// ********************************************************************************
// == Interface ===================================================================
interface PlantInfoProps { plantInfo: PlantInfo; }

// == Component ===================================================================
export const PlantInfo: React.FC<PlantInfoProps> = ({ plantInfo }) =>
    <>
        {plantInfo.plant.common_name
            ?
            // -- Plant Info ------------------------------------------------------
            <div className='center-screen'>
                <div className='card'>
                    <Image src={plantInfo.plantImgURL} width={300} height={300} alt='plantImgURL' />
                    <h3><br /></h3>
                    <h3 className='text-success'>Common Name: {plantInfo.plant.common_name}</h3>
                    <h4 className='text-success'>Type: {plantInfo.plant.type}</h4>
                    <h4 className='text-success'>Latin Name: {plantInfo.plant.latin_name}</h4>
                    <h4 className='text-success'>Exposure: {plantInfo.plant.exposure}</h4>
                    <h4 className='text-success'>Moisture: {plantInfo.plant.moisture}</h4>
                    <h4 className='text-success'>Height: {plantInfo.plant.height} ft</h4>
                    <h4 className='text-success'>Type: {plantInfo.plant.availability}</h4>
                    <h4 className='text-success'>Type: {plantInfo.plant.ease_of_growth}</h4>
                </div>
            </div>

            :
            // -- Main Menu -------------------------------------------------------
            <div className='center-screen'>
                <div className='card'>
                    <Image src='/logo.jpg' width={400} height={300} alt='logo' className='logo' />
                    <h3><br /></h3>
                    <h3 className='text-success'>NatureBase - Plant Database</h3>
                    <h4 className='text-success'>Select a plant to see its details</h4>
                </div>
            </div>
        }
    </>;
