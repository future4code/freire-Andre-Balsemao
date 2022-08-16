


export const goToListTripPage = (navigate) => {
    navigate('/listTripsPage')
}

export const goToLoginPage = (navigate) =>{
    navigate('/loginPage')
}
export const goToAdminHomePage = (navigate) => {
    navigate('/admin/trips/list')
}

export const goBack = (navigate) => {
    navigate(-1)
}

export const goToCreateTripPage = (navigate) => {
    navigate('/admin/trips/create')
}

export const goToTripDetailsPage = (navigate) => {
    navigate('/admin/trips/:id')
}

export function goToHome(navigate) {
    navigate('/')
}