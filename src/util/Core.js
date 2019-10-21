import config from '../config';
import moiCmd from './moiCmd';
export default function Core() {
	// Takes care of initializing and auto adding bot commands to project
	moiCmd();
}
