import BaseLayout from '../components/layouts/BaseLayout.component'
import PhotoGallery from '../components/layouts/PhotoGallery.component'
import { SectionTitle } from '../components/ui'
import { golfPhotos, peugeot5008Photos } from '../utils/carImages'

const CarTitle = ({title}) => <h3 className="text-xl font-bold">{title}</h3>

const Galerie = () => {
	return (
		<div>
			<BaseLayout title="Galerie | Auto Iordache">
				<section className="mt-8 px-4 md:px-24">
					<SectionTitle title="Categoria A" />
					<div className="w-full flex">
						<div className="mr-4 w-1/2">
							<CarTitle title="Volkswagen Golf" />
							<PhotoGallery photos={golfPhotos} />
						</div>
						<div className="w-1/2">
							<CarTitle title="Peugeot 5008" />
							<PhotoGallery photos={peugeot5008Photos} />
						</div>
					</div>
				</section>
				<section className="mt-16 px-4 md:px-24">
					<SectionTitle title="Categoria B" />
					<div className="w-full flex">
						<div className="mr-4 w-1/2">
							<CarTitle title="Volkswagen Golf" />
							<PhotoGallery photos={golfPhotos} />
						</div>
						<div className="w-1/2">
							<CarTitle title="Volkswagen Polo" />
							<PhotoGallery photos={golfPhotos} />
						</div>
					</div>
				</section>
			</BaseLayout>
		</div>
	)
}

export default Galerie