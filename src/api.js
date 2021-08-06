import axios from 'axios';
import { apiUrl } from './constants';

export function generateUrl(path) {
	return apiUrl + path;
}

export function apiReq(endPoint, data, method) {
	return new Promise((res, rej) => {

		axios[method](endPoint, data).then((result) => {
			let { data } = result;

			if (result.status == 200 || result.status == 201) {
				return res(data);
			}

			return rej(data);

		}).catch((err) => {
			return rej(err);
		});
	})
}

export function apiPost(endPoint, data) {
	return apiReq(generateUrl(endPoint), data, 'post');
}

export function apiGet(endPoint, data) {
	return apiReq(generateUrl(endPoint), data, 'get');
}