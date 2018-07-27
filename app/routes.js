const express = require('express')
const router = express.Router()

// Start Dummy Data
const dummy_employer_1 = {
  id: "XJBMNV",
  name: "Nice Employer"
}

const dummy_employer_2 = {
  id: "PPJTRA",
  name: "Good Employer"
}

const dummy_apprentice_1 = {
  id: 1,
  name: "Amy Russell",
  status: "Live",
  training_provider: "BARNFIELD COLLEGE",
  training_provider_id: '10000534',
  cohort_reference: "MK7JNM",
  unique_learner_number: "29475823",
  dob: new Date(1990, 8, 9, 12),
  apprenticeship_training_course: "Electrician, Level: 2",
  apprenticeship_training_course_id: '9811',
  training_start_date: new Date(2017, 8, 1, 12),
  training_end_date: new Date(2018, 8, 1, 12),
  total_cost_of_training: "3,580",
  reference: "RUSSA",
  end_point_assessor: "The end point assessor has not been declared",
  alert: ''
}

const dummy_apprentice_2 = {
  id: 2,
  name: "Cedric Daniels ",
  status: "Live",
  training_provider: "BARNFIELD COLLEGE",
  training_provider_id: '10000534',
  cohort_reference: "VL4WGV",
  unique_learner_number: "22554923",
  dob: new Date(1990, 9, 21, 12),
  apprenticeship_training_course: "Accounting, Level: 2",
  apprenticeship_training_course_id: '454-3-1',
  training_start_date: new Date(2017, 8, 1, 12),
  training_end_date: new Date(2018, 8, 1, 12),
  total_cost_of_training: "4,120",
  reference: "DANIC",
  end_point_assessor: "The end point assessor has not been declared",
  alert: ''
}

const dummy_apprentice_3 = {
  id: 3,
  name: "Rhonda Pearlman",
  status: "Live",
  training_provider: "BARNFIELD COLLEGE",
  training_provider_id: '10000534',
  cohort_reference: "MDDL9M",
  unique_learner_number: "24948859",
  dob: new Date(1991, 0, 15, 12),
  apprenticeship_training_course: "Electrician, Level: 2",
  apprenticeship_training_course_id: '9811',
  training_start_date: new Date(2017, 8, 1, 12),
  training_end_date: new Date(2018, 8, 1, 12),
  total_cost_of_training: "4,990",
  reference: "PEARR",
  end_point_assessor: "The end point assessor has not been declared",
  alert: ''
}

const dummy_apprentice_4 = {
  id: 4,
  name: "Ellis Carver",
  status: "Live",
  training_provider: "PETERBOROUGH REGIONAL COLLEGE",
  training_provider_id: '10005077',
  cohort_reference: "VJJRJV",
  unique_learner_number: "49965724",
  dob: new Date(1991, 7, 29, 12),
  apprenticeship_training_course: "Electrician, Level: 2",
  apprenticeship_training_course_id: '9811',
  training_start_date: new Date(2017, 8, 1, 12),
  training_end_date: new Date(2018, 8, 1, 12),
  total_cost_of_training: "3,580",
  reference: "CARVE",
  end_point_assessor: "The end point assessor has not been declared",
  alert: ''
}

const dummy_apprentice_5 = {
  id: 5,
  name: "James McNulty ",
  status: "Stopped",
  stopped_date: new Date(2017, 11, 19),
  training_provider: "PETERBOROUGH REGIONAL COLLEGE",
  training_provider_id: '10005077',
  cohort_reference: "VWDPWM",
  unique_learner_number: "33390119",
  dob: new Date(1991, 4, 21, 12),
  apprenticeship_training_course: "Electrician, Level: 2",
  apprenticeship_training_course_id: '9811',
  training_start_date: new Date(2017, 8, 1, 12),
  training_end_date: new Date(2018, 8, 1, 12),
  total_cost_of_training: "3,430",
  reference: "MCNUJ",
  end_point_assessor: "The end point assessor has not been declared",
  alert: ''
}

const dummy_training_provider_1 = {
  name: "NCG"
}

const dummy_training_provider_2 = {
  name: "BARNFIELD COLLEGE"
}

const dummy_cohort_1 = {
  training_provider: dummy_training_provider_1,
  reference: 'MK7JNM',
  draft: false,
  apprentices: [dummy_apprentice_1]
}

const dummy_cohort_2 = {
  training_provider: dummy_training_provider_1,
  reference: 'VL4WGV',
  draft: true,
  apprentices: [dummy_apprentice_2]
}

const dummy_cohort_3 = {
  training_provider: dummy_training_provider_2,
  reference: 'MDDL9M',
  draft: false,
  apprentices: [dummy_apprentice_3]
}

const dummy_cohort_4 = {
  training_provider: dummy_training_provider_2,
  reference: 'VJJRJV',
  draft: true,
  apprentices: [dummy_apprentice_4]
}

const dummy_cohort_5 = {
  training_provider: dummy_training_provider_2,
  reference: 'VWDPWM',
  draft: false,
  apprentices: [dummy_apprentice_5]
}

const dummy_transaction_a1 = {
  transactionDate: '20/05/2018',
  transactionType: 'Levy',
  payeScheme: '273/AA00001',
  payrollMonth: 'Apr-18',
  levyDeclared: '1200000',
  english_pc: '100',
  topup_10_pc: '120000',
  trainingProvider: '',
  unique_learner_number: '',
  apprentice: '',
  apprenticeship_training_course: '',
  paid_from_levy: 0,
  your_contribution: 0,
  government_contribution: 0,
  total: 1320000
}

const dummy_transaction_a2 = {
  transactionDate: '20/04/2018',
  transactionType: 'Levy',
  payeScheme: '273/AA00001',
  payrollMonth: 'Mar-18',
  levyDeclared: '1000000',
  english_pc: '100',
  topup_10_pc: '100000',
  trainingProvider: '',
  unique_learner_number: '',
  apprentice: '',
  apprenticeship_training_course: '',
  paid_from_levy: 0,
  your_contribution: 0,
  government_contribution: 0,
  total: 1100000
}

const dummy_transaction_a3 = {
  transactionDate: '20/03/2018',
  transactionType: 'Levy',
  payeScheme: '273/AA00001',
  payrollMonth: 'Feb-18',
  levyDeclared: '1000000',
  english_pc: '100',
  topup_10_pc: '100000',
  trainingProvider: '',
  unique_learner_number: '',
  apprentice: '',
  apprenticeship_training_course: '',
  paid_from_levy: 0,
  your_contribution: 0,
  government_contribution: 0,
  total: 1100000
}

// end dummy data

router.use(function (req, res, next) {
  if (!req.session.cohorts) {
    console.log("Adding cohorts to session");
    req.session.cohorts = [dummy_cohort_1, dummy_cohort_2, dummy_cohort_3, dummy_cohort_4, dummy_cohort_5];
  }
  if (!req.session.employers) {
    console.log("Adding employers to session");
    req.session.employers = [dummy_employer_1, dummy_employer_2];
  }
  if (!req.session.apprentices) {
    console.log("Adding apprentices to session");
    req.session.apprentices = [dummy_apprentice_1, dummy_apprentice_2, dummy_apprentice_3, dummy_apprentice_4, dummy_apprentice_5];
  }
  // if (!req.session.transactions) {
  //   console.log("Adding transactions to session");
  //   req.session.transactions = [
  //     dummy_transaction_a1, dummy_transaction_a2, dummy_transaction_a3, dummy_transaction_a4,
  //     dummy_transaction_b1, dummy_transaction_b2, dummy_transaction_b3, dummy_transaction_b4,
  //     dummy_transaction_c1, dummy_transaction_c2, dummy_transaction_c3, dummy_transaction_c4,
  //     dummy_transaction_d1, dummy_transaction_d2, dummy_transaction_d3, dummy_transaction_d4,
  //     dummy_transaction_e1, dummy_transaction_e2, dummy_transaction_e3, dummy_transaction_e4,
  //     dummy_transaction_f1, dummy_transaction_f2, dummy_transaction_f3, dummy_transaction_f4,
  //     dummy_transaction_g1, dummy_transaction_g2, dummy_transaction_g3, dummy_transaction_g4,
  //     dummy_transaction_h1, dummy_transaction_h2, dummy_transaction_h3, dummy_transaction_h4,
  //     dummy_transaction_i1, dummy_transaction_i2, dummy_transaction_i3, dummy_transaction_i4,
  //     dummy_transaction_j1, dummy_transaction_j2, dummy_transaction_j3, dummy_transaction_j4,
  //     dummy_transaction_k1, dummy_transaction_k2, dummy_transaction_k3, dummy_transaction_k4,
  //     dummy_transaction_l1, dummy_transaction_l2, dummy_transaction_l3, dummy_transaction_l4,
  //     dummy_transaction_m1, dummy_transaction_m2, dummy_transaction_m3, dummy_transaction_m4,
  //   ];
  // }
  if (!req.session.connectionRequests) {
    console.log("Adding connectionRequests to session");
    req.session.connectionRequests = [];
  }
  next();
})

// Route index page
router.get('/', function (req, res) {
  res.render('index')
});

// Add your routes here - above the module.exports line

router.post('/sign-in', function (req, res) {
  res.redirect('accounts');
});

router.param('employer', function (req, res, next, employer) {
  var employers = req.session.employers.filter(e => e.id == employer);
  if (employers.length == 1) {
    res.locals.employer = employers[0];
  }
  next();
});

router.param('apprentice', function (req, res, next, apprentice) {
  var apprentices = req.session.apprentices.filter(a => a.id == apprentice);
  if (apprentices.length == 1) {
    res.locals.apprentice = apprentices[0];
  }
  next();
});

router.param('cohort', function (req, res, next, cohort) {
  var cohorts = req.session.cohorts.filter(c => c.reference == cohort);
  if (cohorts.length == 1) {
    let cohort = cohorts[0];
    cohort.apprentices = req.session.apprentices.filter(a => a.cohort_reference == cohort.reference);
    res.locals.cohort = cohort;
  }
  next();
});

router.param('connectionRequest', function (req, res, next, connectionRequest) {
  res.locals.connectionRequest = req.session.connectionRequests[connectionRequest];
  next();
});

router.param('transaction', function (req, res, next, transaction) {
  var transactions = req.session.transactions.filter(t => t.id == transaction);
  if (transactions.length == 1) {
    res.locals.transaction = transaction[0];
  }
  next();
});

// Employer
router.get('/accounts/:employer', function (req, res) {
  res.render('accounts/employer/index');
})

// Apprentices
router.get('/accounts/:employer/apprentices', function (req, res) {
  res.render('accounts/employer/apprentices/index');
})

router.get('/accounts/:employer/apprentices/manage', function (req, res) {
  //res.locals.apprentices = req.session.apprentices;

  let apprentices = req.session.apprentices;

  // filter out any apprentices
  let query = req.query;

  if (query.Search != null && query.Search != '') {
    apprentices = apprentices.filter(a => a.name.toLowerCase().includes(query.Search.toLowerCase()));
  }

  if (query.Status != null && query.Status != '_unchecked') {
    apprentices = apprentices.filter(a => query.Status.includes(a.status));
  }

  if (query.Alerts != null && query.Alerts != '_unchecked') {
    apprentices = apprentices.filter(a => query.Alerts.includes(a.alerts));
  }

  if (query.TrainingCourses != null && query.TrainingCourses != '_unchecked') {
    apprentices = apprentices.filter(a => query.TrainingCourses.includes(a.apprenticeship_training_course_id));
  }

  if (query.Provider != null && query.Provider != '_unchecked') {
    apprentices = apprentices.filter(a => query.Provider.includes(a.training_provider_id));
  }

  res.locals.apprentices = apprentices;

  res.render('accounts/employer/apprentices/manage/index');
})

router.get('/accounts/:employer/apprentices/manage/:apprentice', function (req, res) {
  res.locals.qs = 'name=' + res.locals.apprentice.name;
  res.locals.qs += '&status=' + res.locals.apprentice.status;
  res.locals.qs += '&training_provider=' + res.locals.apprentice.training_provider;
  res.locals.qs += '&cohort_reference=' + res.locals.apprentice.cohort_reference;
  res.locals.qs += '&unique_learner_number=' + res.locals.apprentice.unique_learner_number;
  res.locals.qs += '&dob=' + res.locals.apprentice.dob;
  res.locals.qs += '&apprenticeship_training_course=' + res.locals.apprentice.apprenticeship_training_course;
  res.locals.qs += '&training_start_date=' + res.locals.apprentice.training_start_date;
  res.locals.qs += '&training_end_date=' + res.locals.apprentice.training_end_date;
  res.locals.qs += '&total_cost_of_training=' + res.locals.apprentice.total_cost_of_training;
  res.locals.qs += '&reference=' + res.locals.apprentice.reference;
  res.render('accounts/employer/apprentices/manage/apprentice');
})

router.get('/accounts/:employer/apprentices/manage/:apprentice/edit', function (req, res) {
  res.render('accounts/employer/apprentices/manage/edit');
})

router.get('/accounts/:employer/apprentices/manage/:apprentice/editStatus', function (req, res) {
  res.render('accounts/employer/apprentices/manage/editStatus');
})

router.post('/accounts/:employer/apprentices/manage/:apprentice/editStatus', function (req, res) {
  let status = req.body.status;
  if (status == 'Live') {
    updateStatus(req, res);
  }
  else if (status == 'Paused') {
    let employer = res.locals.employer;
    let apprentice = res.locals.apprentice;
    res.redirect('/accounts/' + employer.id + '/apprentices/manage/' + apprentice.id + '/editStatus/confirmPause');
  }
  else if (status == 'Stopped') {
    let employer = res.locals.employer;
    let apprentice = res.locals.apprentice;
    res.redirect('/accounts/' + employer.id + '/apprentices/manage/' + apprentice.id + '/editStatus/confirmStopped');
  }
  else {
    let employer = res.locals.employer;
    let apprentice = res.locals.apprentice;

    res.redirect('/accounts/' + employer.id + '/apprentices/manage/' + apprentice.id);
  }
})

router.get('/accounts/:employer/apprentices/manage/:apprentice/editStatus/confirmPause', function (req, res) {
  res.locals.dateChangeTakesEffect = new Date();
  res.render('accounts/employer/apprentices/manage/confirmPaused');
})

router.post('/accounts/:employer/apprentices/manage/:apprentice/editStatus/confirmPause', function (req, res) {
  let status = req.body.confirm;
  if (status == 'yes') {
    updateStatus(req, res);
  }
  else {
    let employer = res.locals.employer;
    let apprentice = res.locals.apprentice;

    res.redirect('/accounts/' + employer.id + '/apprentices/manage/' + apprentice.id);
  }
})

router.get('/accounts/:employer/apprentices/manage/:apprentice/editStatus/confirmStopped', function (req, res) {  
  res.render('accounts/employer/apprentices/manage/confirmStopped');
})

router.post('/accounts/:employer/apprentices/manage/:apprentice/editStatus/confirmStopped', function (req, res) {
  let dateSelection = req.body.DateSelection;
  let apprentices = req.session.apprentices.filter(a => a.id == res.locals.apprentice.id);
  if (apprentices.length == 1) {
    apprentices[0].status = req.body.status;      
  }

  if (dateSelection == 'Today') {
    apprentices[0].stopped_date = new Date();
  }
  else {    
    let day = req.body.StopDate_day;
    let month = req.body.StopDate_month;
    let year = req.body.StopDate_year;    
    apprentices[0].stopped_date = new Date(year, month - 1, day, 12, 0, 0);
  }

  let employer = res.locals.employer;
  let apprentice = res.locals.apprentice;

  res.redirect('/accounts/' + employer.id + '/apprentices/manage/' + apprentice.id);
})

router.post('/accounts/:employer/apprentices/manage/:apprentice/confirmStatus', updateStatus)

function updateStatus(req, res) {
  let apprentices = req.session.apprentices.filter(a => a.id == res.locals.apprentice.id);
  if (apprentices.length == 1) {
    apprentices[0].status = req.body.status;
    apprentices[0].stopped_date = '';
  }

  let employer = res.locals.employer;
  let apprentice = res.locals.apprentice;

  res.redirect('/accounts/' + employer.id + '/apprentices/manage/' + apprentice.id);
}

// Finance
router.get('/accounts/:employer/finance', function (req, res) {
  res.render('accounts/employer/finance/index');
})

router.get('/accounts/:employer/finance/transactions', function (req, res) {
  res.render('accounts/employer/finance/transactions/index');
})

router.get('/accounts/:employer/finance/transactions/:transaction', function (req, res) {  
  res.render('accounts/employer/finance/transactions/details');
})

router.get('/accounts/:employer/finance/download-transactions', function (req, res) {
  res.render('accounts/employer/finance/download-transactions');
})

router.get('/accounts/:employer/finance/transfers', function (req, res) {
  res.locals.connectionRequests = req.session.connectionRequests;
  res.render('accounts/employer/finance/transfers/index');
})

router.get('/accounts/:employer/finance/transfers/connections/requests', function (req, res) {
  res.render('accounts/employer/finance/transfers/connections/requests/index');
})

router.get('/accounts/:employer/finance/transfers/connections/requests/start', function (req, res) {
  res.render('accounts/employer/finance/transfers/connections/requests/start');
})

router.post('/accounts/:employer/finance/transfers/connections/requests/start', function (req, res) {
  let employerId = res.locals.employer.id;
  res.redirect('/accounts/' + employerId + '/finance/transfers/connections/requests/confirm');
})

router.get('/accounts/:employer/finance/transfers/connections/requests/confirm', function (req, res) {
  res.render('accounts/employer/finance/transfers/connections/requests/confirm');
})

router.post('/accounts/:employer/finance/transfers/connections/requests/confirm', function (req, res) {
  // add the employer to ConnectionRequests
  let connectionRequest = {
    employer: res.locals.employer.name,
    status: 'Approved',
    sentOn: '30 July 2018 ',
    receivingEmployer: 'Test Employer 1',
    receiverAccountId: 'Test 3',
    approvedBy: 'Test 4',
    approvedOn: '30 July 2018'
  };

  req.session.connectionRequests.push(connectionRequest);
  let employerId = res.locals.employer.id;
  res.redirect('/accounts/' + employerId + '/finance/transfers');
})

router.get('/accounts/:employer/finance/transfers/connections/requests/:connectionRequest', function (req, res) {
  res.render('accounts/employer/finance/transfers/connections/requests/details');
})

// Add Apprentice Cohort
router.get('/accounts/:employer/apprentices/add', function (req, res) {
  res.render('accounts/employer/apprentices/add/index');
})

router.get('/accounts/:employer/apprentices/add/choose-organisation', function (req, res) {
  res.render('accounts/employer/apprentices/add/choose-organisation');
})

router.post('/accounts/:employer/apprentices/add/choose-organisation', function (req, res) {
  let employerId = res.locals.employer.id;
  res.redirect('/accounts/' + employerId + '/apprentices/add/training-provider');
})

router.get('/accounts/:employer/apprentices/add/training-provider', function (req, res) {
  res.render('accounts/employer/apprentices/add/training-provider');
})

router.post('/accounts/:employer/apprentices/add/training-provider', function (req, res) {
  let employerId = res.locals.employer.id;
  res.redirect('/accounts/' + employerId + '/apprentices/add/confirm-training-provider');
})

router.get('/accounts/:employer/apprentices/add/confirm-training-provider', function (req, res) {
  res.render('accounts/employer/apprentices/add/confirm-training-provider');
})

router.post('/accounts/:employer/apprentices/add/confirm-training-provider', function (req, res) {
  var confirmed = req.body.confirmation;
  let employerId = res.locals.employer.id;

  if (confirmed === 'false') {
    // Redirect back to the training provider selector
    res.redirect('/accounts/' + employerId + '/apprentices/add/training-provider');
  } else {
    // continue
    res.redirect('/accounts/' + employerId + '/apprentices/add/start-adding-apprentices');
  }
})

router.get('/accounts/:employer/apprentices/add/start-adding-apprentices', function (req, res) {
  res.render('accounts/employer/apprentices/add/start-adding-apprentices');
})

router.post('/accounts/:employer/apprentices/add/start-adding-apprentices', function (req, res) {
  var willAdd = req.body.addApprentices;
  if (willAdd === 'false') {
    res.redirect('message-for-training-provider');
  }
  else {
    const min = 10000;
    const max = 99999;
    let cohort_reference = 'V' + Math.floor(Math.random() * (max - min + 1)) + min;

    let cohort = {
      training_provider: dummy_training_provider_1,
      reference: cohort_reference,
      draft: true,
      apprentices: [],
      message: ''
    };

    // add the cohort to session list
    req.session.cohorts.push(cohort);
    let employerId = res.locals.employer.id;
    res.redirect('/accounts/' + employerId + '/apprentices/cohorts/' + cohort_reference);
  }
})

router.get('/accounts/:employer/apprentices/add/message-for-training-provider', function (req, res) {
  res.render('accounts/employer/apprentices/add/message-for-training-provider');
})

router.post('/accounts/:employer/apprentices/add/message-for-training-provider', function (req, res) {
  let employerId = res.locals.employer.id;
  let providerMessage = res.locals.data["provider-message"];

  const min = 10000;
  const max = 99999;
  let cohort_reference = 'V' + Math.floor(Math.random() * (max - min + 1)) + min;

  let cohort = {
    training_provider: dummy_training_provider_1,
    reference: cohort_reference,
    draft: true,
    apprentices: [],
    message: providerMessage
  };

  // add the cohort to session list
  req.session.cohorts.push(cohort);

  res.redirect('/accounts/' + employerId + '/apprentices/cohorts/' + cohort_reference);
})

router.get('/accounts/:employer/apprentices/add/complete', function (req, res) {
  res.render('accounts/employer/apprentices/add/complete');
})

router.get('/accounts/:employer/apprentices/cohorts', function (req, res) {
  res.locals.draft_count = req.session.cohorts.filter(c => c.draft == true).length;
  res.locals.providers_count = req.session.cohorts.filter(c => c.draft == false).length;

  res.render('accounts/employer/apprentices/cohorts/index');
})

router.get('/accounts/:employer/apprentices/cohorts/provider', function (req, res) {
  res.locals.view = "provider";
  res.locals.cohorts = req.session.cohorts.filter(c => c.draft == false);
  res.render('accounts/employer/apprentices/cohorts/list');
})

router.get('/accounts/:employer/apprentices/cohorts/draft', function (req, res) {
  res.locals.view = "draft";
  res.locals.cohorts = req.session.cohorts.filter(c => c.draft == true);
  res.render('accounts/employer/apprentices/cohorts/list');
})

router.get('/accounts/:employer/apprentices/cohorts/:cohort', function (req, res) {
  res.render('accounts/employer/apprentices/cohorts/details');
})

router.get('/accounts/:employer/apprentices/cohorts/:cohort/finished', function (req, res) {
  res.render('accounts/employer/apprentices/cohorts/finished');
})

router.post('/accounts/:employer/apprentices/cohorts/:cohort/finished', function (req, res) {
  let employerId = res.locals.employer.id;
  let cohort = res.locals.cohort;

  var option = req.body.option;
  if (option == 'approve') {
    res.redirect('/accounts/' + employerId + '/apprentices/cohorts/' + cohort.reference + '/message-for-training-provider');
  }
  else if (option == 'send') {
    res.redirect('/accounts/' + employerId + '/apprentices/cohorts/' + cohort.reference + '/message-for-training-provider');
  }
  else if (option == 'save') {
    res.redirect('/accounts/' + employerId + '/apprentices/cohorts');
  }
  else {
    res.render('accounts/employer/apprentices/cohorts/finished');
  }
})

router.get('/accounts/:employer/apprentices/cohorts/:cohort/message-for-training-provider', function (req, res) {
  res.render('accounts/employer/apprentices/cohorts/message-for-training-provider');
})

router.post('/accounts/:employer/apprentices/cohorts/:cohort/message-for-training-provider', function (req, res) {

  let message = req.body.message;

  // add the message to the cohort
  res.locals.cohort.message = message;

  // update the status
  res.locals.cohort.draft = false;

  let employerId = res.locals.employer.id;
  let cohort = res.locals.cohort;
  res.redirect('/accounts/' + employerId + '/apprentices/cohorts/' + cohort.reference + '/complete');
})

router.get('/accounts/:employer/apprentices/cohorts/:cohort/complete', function (req, res) {
  res.render('accounts/employer/apprentices/cohorts/complete');
})

router.get('/accounts/:employer/apprentices/cohorts/:cohort/add-apprentice', function (req, res) {
  res.render('accounts/employer/apprentices/cohorts/add-apprentice');
})

// Add Apprentice to Cohort
router.post('/accounts/:employer/apprentices/cohorts/:cohort/add-apprentice', function (req, res) {
  // adds the apprentice to the cohort and redirects to the cohort details page

  let employerId = res.locals.employer.id;
  let cohort = res.locals.cohort;

  let data = req.session.data;

  let ids = req.session.apprentices.map(a => a.id);
  let max_id = ids.reduce(function (a, b) {
    return Math.max(a, b);
  });
  let newId = max_id + 1;

  const min = 10000000;
  const max = 99999999;
  let uln = Math.floor(Math.random() * (max - min + 1)) + min;

  let dob = new Date(data["dob-year"], data["dob-month"] - 1, data["dob-day"], 12);
  let training_start_date =new Date(data["start-year"], data["start-month"] - 1, 1, 12);
  let training_end_date = new Date(data["finish-year"], data["finish-month"] - 1, 1, 12);

  let apprentice = {
    id: newId,
    name: data["FirstName"] + ' ' + data["LastName"],
    status: "Live",
    training_provider: cohort.training_provider.name,
    cohort_reference: cohort.reference,
    unique_learner_number: uln,
    dob: dob,
    apprenticeship_training_course: data["training_course"],
    training_start_date: training_start_date,
    training_end_date: training_end_date,
    total_cost_of_training: data["price"],
    reference: data["reference"],
    end_point_assessor: "The end point assessor has not been declared"
  };

  req.session.apprentices.push(apprentice); // add the newly-created apprentice to the session list

  res.redirect('/accounts/' + employerId + '/apprentices/cohorts/' + cohort.reference)
})

module.exports = router
