import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useAlert } from 'react-alert'
import { isEmpty } from 'lodash'

import { Input, Button } from '../ui'

const romanianPhoneRegex = /^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/

const ContactForm = ({ showHeading = true }) => {
    const { register, handleSubmit, errors, reset, watch } = useForm()

    const alert = useAlert()

    const onSubmit = async data => {
        try {
            await axios.post('https://submit-form.com/tAHfsRidsAqwVoZA45-b-', data)
            alert.success('Multumim, va vom contacta in curand')
            reset(data)
        } catch (error) {
            alert.error('Transmiterea a esuat')
            console.log(error)
        }
    }

    return (
        <div className={`p-8 ${showHeading ? '' : 'pt-1'} bg-secondary z-10 rounded-lg`}>
            {showHeading && <h3 className="text-xl font-medium" style={{ maxWidth: 320 }}>Lasă-ne datele de contact și revenim noi cu un apel</h3>}
            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ maxWidth: 320 }}>
                <Input
                    labelClassName={!isEmpty(watch('nume')) ? 'moved-label' : ''}
                    name="nume"
                    label="Nume"
                    inputref={register({ required: 'Numele este obligatoriu' })}
                    error={errors.nume}
                />
                <Input
                    labelClassName={!isEmpty(watch('email')) ? 'moved-label' : ''}
                    name="email"
                    label="Adresa de e-mail"
                    inputref={register({ required: 'Email-ul este obligatoriu' })}
                    error={errors.email}
                />
                <Input
                    labelClassName={!isEmpty(watch('telefon')) ? 'moved-label' : ''}
                    name="telefon"
                    label="Numărul de telefon"
                    inputref={register({
                        required: 'Numarul de telefon este obligatoriu',
                        pattern: {
                            value: romanianPhoneRegex,
                            message: 'Numarul de telefon trebuie sa fie valid'
                        }
                    })}
                    error={errors.telefon}
                />
                <Input
                    labelClassName={!isEmpty(watch('comentariu')) ? 'moved-label' : ''}
                    name="comentariu"
                    label="Comentariu"
                    inputref={register}
                />
                <Button className="w-full" htmlType="submit">
                    Trimite
                </Button>
            </form>
        </div>
    )
}

export default ContactForm