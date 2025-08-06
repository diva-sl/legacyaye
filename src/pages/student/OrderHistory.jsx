import React from 'react'
import StudentLayout from './StudentLayout'

function OrderHistory() {
  return (
    <StudentLayout>

<div className="col-lg-9">
  <div className="dashboard__content-wrap">
    <div className="dashboard__content-title">
      <h4 className="title">Order History</h4>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="dashboard__review-table">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Course Name</th>
                <th>Date</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>#2348</p>
                </td>
                <td>
                  <p>Application</p>
                </td>
                <td>
                  <p>June 20, 2024</p>
                </td>
                <td>
                  <p>$99.99</p>
                </td>
                <td>
                  <span className="dashboard__quiz-result">Success</span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>#4795</p>
                </td>
                <td>
                  <p>Finance</p>
                </td>
                <td>
                  <p>February 03, 2024</p>
                </td>
                <td>
                  <p>$199.99</p>
                </td>
                <td>
                  <span className="dashboard__quiz-result processing">
                    Processing
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>#9269</p>
                </td>
                <td>
                  <p>Graphic Design</p>
                </td>
                <td>
                  <p>March 29, 2024</p>
                </td>
                <td>
                  <p>$49.99</p>
                </td>
                <td>
                  <span className="dashboard__quiz-result hold">On Hold</span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>#1286</p>
                </td>
                <td>
                  <p>Development</p>
                </td>
                <td>
                  <p>May 15, 2024</p>
                </td>
                <td>
                  <p>$129.99</p>
                </td>
                <td>
                  <span className="dashboard__quiz-result fail">Canceled</span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>#3578</p>
                </td>
                <td>
                  <p>Marketing</p>
                </td>
                <td>
                  <p>January 31, 2024</p>
                </td>
                <td>
                  <p>$99.99</p>
                </td>
                <td>
                  <span className="dashboard__quiz-result">Success</span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>#8685</p>
                </td>
                <td>
                  <p>Life Style</p>
                </td>
                <td>
                  <p>February 03, 2024</p>
                </td>
                <td>
                  <p>$199.99</p>
                </td>
                <td>
                  <span className="dashboard__quiz-result processing">
                    Processing
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>#9669</p>
                </td>
                <td>
                  <p>Management</p>
                </td>
                <td>
                  <p>March 25, 2024</p>
                </td>
                <td>
                  <p>$49.99</p>
                </td>
                <td>
                  <span className="dashboard__quiz-result hold">On Hold</span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>#1236</p>
                </td>
                <td>
                  <p>JavaScript</p>
                </td>
                <td>
                  <p>May 15, 2024</p>
                </td>
                <td>
                  <p>$129.99</p>
                </td>
                <td>
                  <span className="dashboard__quiz-result fail">Canceled</span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>#1248</p>
                </td>
                <td>
                  <p>App Development</p>
                </td>
                <td>
                  <p>January 31, 2024</p>
                </td>
                <td>
                  <p>$99.99</p>
                </td>
                <td>
                  <span className="dashboard__quiz-result">Success</span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>#9885</p>
                </td>
                <td>
                  <p>Graphic</p>
                </td>
                <td>
                  <p>February 03, 2024</p>
                </td>
                <td>
                  <p>$199.99</p>
                </td>
                <td>
                  <span className="dashboard__quiz-result processing">
                    Processing
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>#9089</p>
                </td>
                <td>
                  <p>Digital Marketing</p>
                </td>
                <td>
                  <p>March 25, 2024</p>
                </td>
                <td>
                  <p>$49.99</p>
                </td>
                <td>
                  <span className="dashboard__quiz-result hold">On Hold</span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>#4586</p>
                </td>
                <td>
                  <p>JavaScript</p>
                </td>
                <td>
                  <p>May 15, 2024</p>
                </td>
                <td>
                  <p>$129.99</p>
                </td>
                <td>
                  <span className="dashboard__quiz-result fail">Canceled</span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>#5478</p>
                </td>
                <td>
                  <p>App Development</p>
                </td>
                <td>
                  <p>January 31, 2024</p>
                </td>
                <td>
                  <p>$99.99</p>
                </td>
                <td>
                  <span className="dashboard__quiz-result">Success</span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>#4585</p>
                </td>
                <td>
                  <p>Graphic</p>
                </td>
                <td>
                  <p>February 03, 2024</p>
                </td>
                <td>
                  <p>$199.99</p>
                </td>
                <td>
                  <span className="dashboard__quiz-result processing">
                    Processing
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>#7869</p>
                </td>
                <td>
                  <p>Digital Marketing</p>
                </td>
                <td>
                  <p>March 25, 2024</p>
                </td>
                <td>
                  <p>$49.99</p>
                </td>
                <td>
                  <span className="dashboard__quiz-result hold">On Hold</span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>#4586</p>
                </td>
                <td>
                  <p>JavaScript</p>
                </td>
                <td>
                  <p>May 15, 2024</p>
                </td>
                <td>
                  <p>$129.99</p>
                </td>
                <td>
                  <span className="dashboard__quiz-result fail">Canceled</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

</StudentLayout>
  )
}

export default OrderHistory