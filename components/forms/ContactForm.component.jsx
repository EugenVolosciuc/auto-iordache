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
            await axios.post(`https://submit-form.com/${FORMSPARK_FORM_ID}`, data)
            alert.success('Multumim, va vom contacta in curand')
            reset(data)
        } catch (error) {
            alert.error(<>Nu stim de ce, dar transmiterea a esuat. Va rugam sa ne contactati la numarul <a href="tel:0743339536">074 333 9536</a>.</>)
            console.log(error)
        }
    }

    return (
        <div className={`p-8 ${showHeading ? '' : 'pt-1'} bg-white z-10 rounded-lg w-full md:w-auto`}>
            {showHeading && <h3 className="text-xl font-medium mx-auto" style={{ maxWidth: 320 }}>Lasă-ne datele de contact și revenim noi cu un apel</h3>}
            <form
                className="mx-auto"
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
                    labelClassName={!isEmpty(watch('email')) ? 'moved-label' : ''}
                    name="email"
                    label="Adresa de e-mail (optional)"
                    inputref={register}
                />
                <Input
                    labelClassName={!isEmpty(watch('comentariu')) ? 'moved-label' : ''}
                    name="comentariu"
                    label="Comentariu (optional)"
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