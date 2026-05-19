parser = (ctx) => {

  if (!ctx.datasource || ctx.datasource.length === 0) {
    return "No Data";
  }

  var raw = ctx.datasource;

  raw.sort((a, b) => {

    return new Date(a.data.timestamp) -
           new Date(b.data.timestamp);

  });

  var latest = raw[raw.length - 1];

  return "Current Load : " +
         latest.data.current_load_kw;
}
