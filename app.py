from flask import Flask, render_template, request
from datetime import datetime

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def hello():
    if request.method == 'POST':
        exit_date = request.form.get('exit_date')
        exit_time = request.form.get('exit_time', '12:00:00')
        combined_datetime = f"{exit_date}T{exit_time}"
        dt_obj = datetime.strptime(f"{exit_date} {exit_time}", "%Y-%m-%d %H:%M:%S")
        formatted_date = dt_obj.strftime("%b %d, %Y")
        return render_template("index.html", name=None, date=combined_datetime, formatted_date=formatted_date)
    return render_template("index.html", name=None, date=None, formatted_date=None)

if __name__ == '__main__':
    app.run(debug=True)