import BaseLayout from '../components/layouts/BaseLayout.component'
import ContactForm from '../components/forms/ContactForm.component'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={18}
        defaultCenter={{ lat: 47.170815, lng: 27.565329 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: 47.170815, lng: 27.565329 }} />}
    </GoogleMap>
))

const Contact = () => {
	return (
		<div>
			<BaseLayout>
				<section className="px-4 md:px-24 h-full">
					<h1 className="text-center text-3xl font-black">Hai sa facem cunostinta</h1>
					<p className="text-xl text-center mt-2">Alatura-te soferilor orasului Iasi</p>
					<div className="flex flex-col md:flex-row md:justify-center h-full mt-8 md:mt-24">
						<div className="md:mr-8">
							<div className="text-center md:text-left">
								<h3 className="text-2xl font-medium mb-1">Telefoneaza-ne</h3>
								<p className="text-lg">076 000 1111</p>
							</div>
							<div className="mt-4">
								<h3 className="text-2xl font-medium mb-2 text-center md:text-left">Trimite-ne un mesaj</h3>
								<ContactForm showHeading={false} />
							</div>
						</div>
						<div className="md:w-1/2 mt-6 md:mt-0">
							<div className="text-center md:text-left">
								<h3 className="text-2xl font-medium mb-1">Viziteaza-ne</h3>
								<p className="text-lg mb-4">Iasi, Soseaua Arcu 64</p>
								<div className="rounded-lg">
									<MyMapComponent
										isMarkerShown
										googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
										loadingElement={<div style={{ height: `100%` }} />}
										containerElement={<div style={{ height: `410px` }} />}
										mapElement={<div style={{ height: `100%`, borderRadius: '.5rem' }} />}
									/>
								</div>
							</div>
						</div>
					</div>
					<h3 className="text-2xl font-medium text-center my-6 md:mt-8">Urmareste-ne pe <a target="_blank" href="https://www.facebook.com/Scoala-Auto-Iordache-545829935899408/"><i aria-hidden className="fab fa-facebook-square fa-lg text-main"></i></a></h3>
				</section>
			</BaseLayout>
		</div>
	)
}

export default Contact