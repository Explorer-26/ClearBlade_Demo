
parser = (ctx) => {

  if (!ctx.datasource || ctx.datasource.length === 0) {
    return [];
  }

  var raw = ctx.datasource;

  raw.sort((a, b) => {

    return new Date(a.data.timestamp) -
           new Date(b.data.timestamp);

  });

  var points = [];

  for (var i = 0; i < raw.length; i++) {

    var ts = raw[i].data.timestamp;

    ts = ts.split(".")[0];

    points.push({

      x: new Date(ts).toLocaleTimeString(),

      y: Number(
        raw[i].data.current_load_kw
      ) || 0

    });

  }

  return points;
}
