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

  return "Power State : " +
         latest.data.power_state +

         " | Voltage : " +
         latest.data.voltage +

         " | Power : " +
         latest.data.watts;
}
