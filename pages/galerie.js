import BaseLayout from '../components/layouts/BaseLayout.component'
import PhotoGallery from '../components/layouts/PhotoGallery.component'
import { SectionTitle } from '../components/ui'
import { volkswagenGolfPhotos, peugeot, opelAstraPhotos, renault, suzuki, hondaCB, tow, man, daf } from '../utils/carImages'

const CarTitle = ({title}) => <h3 className="text-xl font-bold">{title}</h3>

const Galerie = () => {
	return (
		<div>
			<BaseLayout title="Galerie | Auto Iordache">
				<section className="mt-8 px-4 md:px-24">
					<SectionTitle title="Categoria A" />
					<div className="w-full flex flex-col md:flex-row">
						<div className="mr-4 w-full md:w-1/2">
							<CarTitle title="Suzuki DR 650" />
							<PhotoGallery photos={suzuki} />
						</div>
						<div className="w-full md:w-1/2">
							<CarTitle title="Honda CBF 600" />
							<PhotoGallery photos={hondaCB} />
						</div>
					</div>
				</section>
				<section className="mt-16 px-4 md:px-24">
					<SectionTitle title="Categoria B" />
					<div className="w-full flex">
						<div className="w-full">
							<CarTitle title="Peugeot 208" />
							<PhotoGallery photos={peugeot} />
						</div>
					</div>
					<div className="w-full flex flex-col md:flex-row mt-6">
						<div className="mr-4 w-full md:w-1/2">
							<CarTitle title="Volkswagen Golf" />
							<PhotoGallery photos={volkswagenGolfPhotos} />
						</div>
						<div className="mr-4 w-full md:w-1/2">
							<CarTitle title="Opel Astra" />
							<PhotoGallery photos={opelAstraPhotos} />
						</div>
						<div className="mr-4 w-full md:w-1/2">
							<CarTitle title="Renault Clio" />
							<PhotoGallery photos={renault} />
						</div>
					</div>
				</section>
				<section className="mt-16 px-4 md:px-24 pb-4">
					<SectionTitle title="Categoriile C, D, E" />
					<div className="flex flex-col md:flex-row">
						<div className="w-full md:w-2/3 flex flex-col md:flex-row">
							<div className="mr-4 w-full md:w-1/2">
								<CarTitle title="Man Lion" />
								<PhotoGallery photos={man} />
							</div>
							<div className="mr-4 w-full md:w-1/2">
								<CarTitle title="DAF" />
								<PhotoGallery photos={daf} />
							</div>
						</div>
						<div className="w-full w-fullmd:w-1/3 flex">
							<div className="mr-4 w-full">
								<CarTitle title="Remorca camion" />
								<PhotoGallery photos={tow} />
							</div>
						</div>
					</div>
				</section>
			</BaseLayout>
		</div>
	)
}

export default Galerie