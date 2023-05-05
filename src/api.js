export async function getVans() {
  let vans = JSON.parse(localStorage.getItem('vans'));

  if (vans) {
    return vans;
  }

  const response = await fetch('/api/vans');

  if (!response.ok) {
    throw {
      message: 'Failed to fetch vans',
      status: response.status,
      statusText: response.statusText,
    };
  }

  const data = await response.json();
  vans = data.vans;

  //   localStorage.setItem('vans', JSON.stringify(vans));
  return vans;
}

export async function getHostVans() {
  let hostVans = JSON.parse(localStorage.getItem('hostVans'));

  if (hostVans) {
    return hostVans;
  }

  const response = await fetch('/api/host/vans');

  if (!response.ok) {
    throw {
      message: 'Failed to fetch vans',
      status: response.status,
      statusText: response.statusText,
    };
  }

  const data = await response.json();
  hostVans = data.vans;

  //   localStorage.setItem('hostVans', JSON.stringify(hostVans));
  return hostVans;
}

export async function getVanDetails(id) {
  const response = await fetch(`/api/vans/${id}`);

  if (!response.ok) {
    throw {
      message: 'Failed to fetch van details',
      status: response.status,
      statusText: response.statusText,
    };
  }

  const data = await response.json();
  return data.vans;
}

export async function getHostVanDetails(id) {
  const response = await fetch(`/api/host/vans/${id}`);

  if (!response.ok) {
    throw {
      message: 'Failed to fetch van details',
      status: response.status,
      statusText: response.statusText,
    };
  }

  const data = await response.json();
  return data.vans;
}
