import { connect } from 'react-redux'
import { Navbar } from './Navbar'

let mapStateToProps = state => {
	return { dialogsPage: state.navbarPage }
}

let mapDispatchToProps = dispatch => {
	return {
		
	}
}

export const NavbarContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Navbar)

